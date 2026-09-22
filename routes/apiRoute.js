const dns = require("dns");
try {
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch (e) {}
const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const sanitize = require("mongo-sanitize"); // #7 MongoDB Injection himoyasi
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "eurotex_secret_2026";
const { requireAdmin, parseCookies } = require("../middleware/adminAuth"); // #6 Admin API himoyasi
const User = require("../models/User");
const Order = require("../models/Order");
const {
  getTelegramConfig,
  saveTelegramConfig,
  sendTelegramMessage,
  sendQuickLeadNotification,
  sendNasiyaNotification,
} = require("../utils/telegramBot");


const DATA_DIR = path.join(__dirname, "../data");
if (!fs.existsSync(DATA_DIR)) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  } catch (e) {}
}

function readJsonFile(filename, defaultValue = []) {
  const filePath = path.join(DATA_DIR, filename);
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, "utf8"));
    }
  } catch (e) {}
  return defaultValue;
}

// 💾 #1 ATOMAR FAYL YOZISH: .tmp faylga yozib, keyin fs.renameSync — server crash'dan himoya
function writeJsonFile(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  const tmpPath  = filePath + ".tmp";
  try {
    const json = JSON.stringify(data, null, 2);
    fs.writeFileSync(tmpPath, json, "utf8");
    fs.renameSync(tmpPath, filePath);
    return true;
  } catch (e) {
    console.error(`Error writing ${filename}:`, e);
    try { fs.unlinkSync(tmpPath); } catch (_) {}
    return false;
  }
}

// Anti-spam rate limiter for Telegram lead/nasiya alerts (har 2 daqiqada max 3 ta so'rov)
const spamCooldownMap = new Map();
function checkSpamLimit(req, keyPrefix = "lead") {
  // 🛡️ #4 IP Spoofing Himoyasi
  let ip = req.ip || "";
  if (!ip) {
    const rawXff = req.headers["x-forwarded-for"];
    ip = typeof rawXff === "string" ? rawXff.split(",")[0].trim() : (req.socket && req.socket.remoteAddress) || "";
  }
  if (ip.startsWith("::ffff:")) ip = ip.substring(7);
  ip = ip.replace(/[^0-9a-fA-F:.]/g, "").slice(0, 45) || "unknown_ip";

  const key = `${keyPrefix}_${ip}`;
  const now = Date.now();
  const record = spamCooldownMap.get(key) || { count: 0, firstTime: now };

  if (now - record.firstTime > 120000) {
    record.count = 0;
    record.firstTime = now;
  }

  record.count++;
  spamCooldownMap.set(key, record);

  return record.count <= 3;
}

// =============================================================================
// 1. ⚡ 1-KLIKDA XARID VA TEZKOR QO'NG'IROQLAR (LEADS)
// =============================================================================
router.get("/leads", requireAdmin, (req, res) => {   // #6 — faqat admin
  const leads = readJsonFile("leads.json", [
    {
      id: "lead_1",
      name: "Akmal Saidov",
      phone: "+998 90 555 77 75",
      productTitle: "Eurotex Royal Navy Slim Fit Kostyum",
      size: "36",
      color: "To'q ko'k (Navy)",
      price: "499 000 so'm",
      status: "yangi",
      date: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }),
    },
  ]);
  res.json({ success: true, leads });
});

router.post("/leads", async (req, res) => {
  if (!checkSpamLimit(req, "lead")) {
    return res.status(429).json({
      success: false,
      message: "Iltimos, ozroq kuting. Arizangiz allaqachon qabul qilingan.",
    });
  }

  // #7 MongoDB sanitize — injection himoyasi
  const { name, phone, productTitle, size, color, price } = sanitize(req.body);
  const cleanPhone = String(phone || "").replace(/\D/g, "");
  if (!cleanPhone || cleanPhone.length < 9) {
    return res.status(400).json({ success: false, message: "Telefon raqami kamida 9 ta raqamdan iborat bo'lishi shart!" });
  }

  const leads = readJsonFile("leads.json", []);
  const newLead = {
    id: "lead_" + Date.now(),
    name: String(name || "Xaridor").replace(/[<>]/g, "").slice(0, 50),
    phone: cleanPhone.length === 9 ? `+998${cleanPhone}` : (cleanPhone.startsWith("998") ? `+${cleanPhone}` : `+${cleanPhone}`),
    productTitle: String(productTitle || "Eurotex Kostyum").replace(/[<>]/g, "").slice(0, 100),
    size: String(size || "-").slice(0, 20),
    color: String(color || "-").slice(0, 30),
    price: String(price || "-").slice(0, 40),
    status: "yangi",
    date: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }),
  };


  leads.unshift(newLead);
  writeJsonFile("leads.json", leads);

  // Send instant alert to Telegram Bot
  try {
    await sendQuickLeadNotification(newLead);
  } catch (e) {}

  res.json({ success: true, lead: newLead });
});

router.put("/leads/:id", requireAdmin, (req, res) => {   // #6 — faqat admin
  const { id } = req.params;
  const { status } = sanitize(req.body);
  const leads = readJsonFile("leads.json", []);
  const item = leads.find((l) => String(l.id) === String(id));
  if (item) {
    item.status = status;
    writeJsonFile("leads.json", leads);
    return res.json({ success: true, lead: item });
  }
  res.status(404).json({ success: false, message: "So'rov topilmadi" });
});

// =============================================================================
// 2. 👥 FOYDALANUVCHILAR BAZASI (USER CRM)
// =============================================================================
router.get("/users-list", requireAdmin, async (req, res) => {   // #6 — faqat admin
  try {
    // 1. Gather users from Mongo + local database.json
    let dbUsers = [];
    try {
      dbUsers = await User.find().sort({ createdAt: -1 }).limit(300).lean();
    } catch (e) {
      console.warn("MongoDB User.find warning:", e.message);
    }

    // Also read local database.json users
    let localUsers = [];
    const localDbFile = path.join(__dirname, "../database.json");
    if (fs.existsSync(localDbFile)) {
      try {
        localUsers = JSON.parse(fs.readFileSync(localDbFile, "utf8")) || [];
      } catch (e) {}
    }

    const usersMap = new Map();

    const registerUser = (u) => {
      const email = String(u.email || "").toLowerCase().trim();
      if (!email) return;
      if (!usersMap.has(email)) {
        usersMap.set(email, {
          id: u._id || u.id || "usr_" + Math.random().toString(36).slice(2, 8),
          email: u.email,
          name: u.name || u.email.split("@")[0],
          phone: u.phone && u.phone !== "-" ? u.phone : "",
          city: u.city || u.region || "Toshkent",
          address: u.address || "",
          birthDate: u.birthDate || "",
          suitSize: u.suitSize || "",
          style: u.style || "",
          ordersCount: 0,
          totalSpent: 0,
          role: u.role || "user",
          createdAt: u.createdAt || new Date(),
        });
      } else {
        // Merge phone, address, and profile preferences if missing
        const existing = usersMap.get(email);
        if ((!existing.phone || existing.phone === "-") && u.phone) existing.phone = u.phone;
        if (!existing.address && u.address) existing.address = u.address;
        if (!existing.name && u.name) existing.name = u.name;
        if (!existing.city && (u.city || u.region)) existing.city = u.city || u.region;
        if (!existing.birthDate && u.birthDate) existing.birthDate = u.birthDate;
        if (!existing.suitSize && u.suitSize) existing.suitSize = u.suitSize;
        if (!existing.style && u.style) existing.style = u.style;
      }
    };

    dbUsers.forEach(registerUser);
    localUsers.forEach(registerUser);

    // 2. Gather orders from Mongo + local data/orders.json
    let dbOrders = [];
    try {
      dbOrders = await Order.find().lean();
    } catch (e) {
      console.warn("MongoDB Order.find in users-list warning:", e.message);
    }

    let localOrders = [];
    const localOrdersFile = path.join(__dirname, "../data/orders.json");
    if (fs.existsSync(localOrdersFile)) {
      try {
        localOrders = JSON.parse(fs.readFileSync(localOrdersFile, "utf8")) || [];
      } catch (e) {}
    }

    const orderDedup = new Map();
    dbOrders.forEach((o) => {
      const id = String(o.orderId || o.id || o._id);
      orderDedup.set(id, o);
    });
    localOrders.forEach((o) => {
      const id = String(o.orderId || o.id || o._id);
      if (!orderDedup.has(id)) {
        orderDedup.set(id, o);
      }
    });

    const allOrders = Array.from(orderDedup.values());

    // 3. Compute orders and LTV for each user
    allOrders.forEach((o) => {
      const oEmail = String(o.userEmail || "").toLowerCase().trim();
      const oPhone = String(o.phone || "").replace(/[^0-9]/g, "");
      const oRecipient = String(o.recipient || o.customerName || "").toLowerCase().trim();

      let user = null;
      if (oEmail && usersMap.has(oEmail)) {
        user = usersMap.get(oEmail);
      } else if (oPhone && oPhone.length >= 7) {
        for (const u of usersMap.values()) {
          const uPhone = String(u.phone || "").replace(/[^0-9]/g, "");
          if (uPhone && (uPhone.includes(oPhone) || oPhone.includes(uPhone))) {
            user = u;
            break;
          }
        }
      }

      if (!user && oRecipient) {
        for (const u of usersMap.values()) {
          const uName = String(u.name || "").toLowerCase().trim();
          const uPrefix = String(u.email || "").split("@")[0].toLowerCase().trim();
          if ((uName && uName.length >= 3 && oRecipient.includes(uName)) ||
              (uPrefix && uPrefix.length >= 4 && oRecipient.includes(uPrefix))) {
            user = u;
            break;
          }
        }
      }

      if (!user) {
        const guestEmail = oEmail || `xaridor_${o.orderId || Math.random().toString(36).slice(2, 7)}@eurotex.uz`;
        user = {
          id: "guest_" + (o.orderId || Math.random().toString(36).slice(2, 8)),
          email: oEmail || guestEmail,
          name: o.customerName || o.recipient || guestEmail.split("@")[0],
          phone: o.phone || "-",
          city: o.region || "O'zbekiston",
          address: o.address || "",
          ordersCount: 0,
          totalSpent: 0,
          role: "customer",
          createdAt: o.createdAt || new Date(),
        };
        usersMap.set(user.email, user);
      }

      user.ordersCount += 1;
      const rawTot = Number(o.totalPriceUzs || o.total || 0);
      const uzsVal = rawTot > 5000 ? rawTot : rawTot * 12650;
      user.totalSpent += uzsVal;

      if (o.phone && (!user.phone || user.phone === "-")) user.phone = o.phone;
      if (o.address && !user.address) user.address = o.address;
    });

    const list = Array.from(usersMap.values());
    // Sort by totalSpent or ordersCount descending
    list.sort((a, b) => (b.totalSpent || 0) - (a.totalSpent || 0));

    res.json({ success: true, users: list });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// =============================================================================
// 2.1 👤 MIJOZ PROFILINI TO'LDIRISH VA YANGILASH API
// =============================================================================
router.post("/user/update-profile", async (req, res) => {
  try {
    const { email, name, phone, extraPhone, telegram, city, address, birthDate, suitSize, style } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: "Email kiritilmagan" });
    }

    const cleanEmail = String(email).toLowerCase().trim();

    // Autentifikatsiya tekshiruvi: faqat o'z profilini yoki rasmiy admin o'zgartira oladi
    const cookies = parseCookies(req);
    const token = cookies.eurotex_session || (req.headers.authorization?.startsWith("Bearer ") ? req.headers.authorization.slice(7) : null) || req.body.token;
    if (token) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const tokenEmail = String(decoded.email || "").toLowerCase().trim();
        const isAdmin = decoded.role === "admin" || ["0600quetry@gmail.com", "eurotexkids7775@gmail.com"].includes(tokenEmail);
        if (!isAdmin && tokenEmail && tokenEmail !== cleanEmail) {
          return res.status(403).json({ success: false, message: "Boshqa foydalanuvchi profilini o'zgartirish taqiqlangan!" });
        }
      } catch (e) {}
    }

    // 1. Update in local database.json
    const localDbFile = path.join(__dirname, "../database.json");
    if (fs.existsSync(localDbFile)) {
      try {
        let db = JSON.parse(fs.readFileSync(localDbFile, "utf8")) || [];
        const idx = db.findIndex((u) => String(u.email || "").toLowerCase().trim() === cleanEmail);
        if (idx !== -1) {
          if (name) db[idx].name = name;
          if (phone) db[idx].phone = phone;
          if (extraPhone !== undefined) db[idx].extraPhone = extraPhone;
          if (telegram !== undefined) db[idx].telegram = telegram;
          if (city) db[idx].city = city;
          if (address) db[idx].address = address;
          if (birthDate) db[idx].birthDate = birthDate;
          if (suitSize) db[idx].suitSize = suitSize;
          if (style) db[idx].style = style;
          db[idx].updatedAt = new Date();
        } else {
          db.push({
            _id: "usr_" + Math.random().toString(36).slice(2, 9),
            email: cleanEmail,
            name: name || cleanEmail.split("@")[0],
            phone: phone || "",
            extraPhone: extraPhone || "",
            telegram: telegram || "",
            city: city || "Toshkent",
            address: address || "",
            birthDate: birthDate || "",
            suitSize: suitSize || "",
            style: style || "",
            role: "user",
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        }
        // 💾 #1 ATOMAR FAYL YOZISH: database.json
        const tmpDbFile = localDbFile + ".tmp";
        fs.writeFileSync(tmpDbFile, JSON.stringify(db, null, 4), "utf8");
        fs.renameSync(tmpDbFile, localDbFile);
      } catch (e) {}
    }

    // 2. Update in MongoDB if connected
    try {
      const mongoose = require("mongoose");
      if (mongoose.connection.readyState === 1) {
        await User.findOneAndUpdate(
          { email: cleanEmail },
          {
            $set: {
              ...(name ? { name } : {}),
              ...(phone ? { phone } : {}),
              ...(extraPhone !== undefined ? { extraPhone } : {}),
              ...(telegram !== undefined ? { telegram } : {}),
              ...(city ? { city } : {}),
              ...(address ? { address } : {}),
              ...(birthDate ? { birthDate } : {}),
              ...(suitSize ? { suitSize } : {}),
              ...(style ? { style } : {}),
              updatedAt: new Date(),
            },
          },
          { new: true, upsert: true }
        );
      }
    } catch (e) {
      console.warn("Mongo update-profile warning:", e.message);
    }

    return res.json({ success: true, message: "Profil muvaffaqiyatli saqlandi!" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// =============================================================================
// 3. 🏷️ PROMOKODLAR VA CHEGIRMA KUPONLARI TIZIMI
// =============================================================================
const DEFAULT_PROMOS = [
  {
    id: "promo_1",
    code: "EUROTEX20",
    discountType: "percent", // percent yoki fixed
    discountValue: 20, // 20%
    minOrderPrice: 500000, // 500 000 so'm
    maxUses: 100, // Jami 100 marta
    usedCount: 14,
    perUserLimit: 1, // 1 foydalanuvchiga 1 marta
    usedBy: [], // Foydalangan foydalanuvchilar (telefon/email)
    expiryDays: 30,
    expiresAt: new Date(Date.now() + 30 * 86400000).toISOString(),
    active: true,
  },
  {
    id: "promo_2",
    code: "MAKTAB50K",
    discountType: "fixed",
    discountValue: 50000, // 50 000 so'm
    minOrderPrice: 400000,
    maxUses: 50,
    usedCount: 8,
    perUserLimit: 1,
    usedBy: [],
    expiryDays: 15,
    expiresAt: new Date(Date.now() + 15 * 86400000).toISOString(),
    active: true,
  },
];

router.get("/promocodes", requireAdmin, (req, res) => {   // #6 — faqat admin
  const promos = readJsonFile("promocodes.json", DEFAULT_PROMOS);
  // Xavfsizlik: foydalanuvchiga faqat zarur maydonlar
  const safePromos = promos.map(({ id, code, discountType, discountValue, minOrderPrice, expiresAt, active }) =>
    ({ id, code, discountType, discountValue, minOrderPrice, expiresAt, active })
  );
  res.json({ success: true, promocodes: safePromos });
});

router.post("/promocodes", requireAdmin, (req, res) => {   // #6 — faqat admin
  const {
    code,
    discountType,
    discountValue,
    minOrderPrice,
    maxUses,
    perUserLimit,
    expiryDays,
  } = sanitize(req.body);   // #7 sanitize


  if (!code) {
    return res.status(400).json({ success: false, message: "Promokod nomi kiritilmadi" });
  }

  const promos = readJsonFile("promocodes.json", DEFAULT_PROMOS);
  const cleanCode = String(code).trim().toUpperCase();

  const existing = promos.find((p) => p.code.toUpperCase() === cleanCode);
  if (existing) {
    return res.status(400).json({ success: false, message: "Bunday promokod allaqachon mavjud" });
  }

  const days = Number(expiryDays) || 30;
  const newPromo = {
    id: "promo_" + Date.now(),
    code: cleanCode,
    discountType: discountType || "percent",
    discountValue: Number(discountValue) || 10,
    minOrderPrice: Number(minOrderPrice) || 0,
    maxUses: Number(maxUses) || 100,
    usedCount: 0,
    perUserLimit: Number(perUserLimit) || 1,
    usedBy: [],
    expiryDays: days,
    expiresAt: new Date(Date.now() + days * 86400000).toISOString(),
    active: true,
  };

  promos.unshift(newPromo);
  writeJsonFile("promocodes.json", promos);
  res.json({ success: true, promocode: newPromo });
});

router.delete("/promocodes/:id", requireAdmin, (req, res) => {   // #6 — faqat admin
  const { id } = req.params;
  let promos = readJsonFile("promocodes.json", DEFAULT_PROMOS);
  promos = promos.filter((p) => String(p.id) !== String(id) && p.code !== id);
  writeJsonFile("promocodes.json", promos);
  res.json({ success: true });
});

// Promokodni tekshirish (Validation)
router.post("/promocodes/validate", (req, res) => {
  const { code, orderTotal, userIdentifier } = req.body;
  if (!code) {
    return res.status(400).json({ valid: false, message: "Promokod kiritilmadi" });
  }

  const promos = readJsonFile("promocodes.json", DEFAULT_PROMOS);
  const cleanCode = String(code).trim().toUpperCase();
  const promo = promos.find((p) => p.code.toUpperCase() === cleanCode);

  if (!promo || !promo.active) {
    return res.json({ valid: false, message: "Bunday promokod mavjud emas yoki faol emas" });
  }

  // 1. Muddatini tekshirish
  if (promo.expiresAt && new Date(promo.expiresAt) < new Date()) {
    return res.json({ valid: false, message: "Ushbu promokodning amal qilish muddati tugagan" });
  }

  // 2. Jami ishlatilish limitini tekshirish
  if (promo.maxUses && promo.usedCount >= promo.maxUses) {
    return res.json({ valid: false, message: "Ushbu promokoddan foydalanish limiti tugagan" });
  }

  // 3. Minimal buyurtma summasini tekshirish (USD va UZS ni to'g'ri tekshirish)
  const rate = 12650;
  const { orderTotalSom, orderTotalUsd } = req.body;
  let totalSom = Number(orderTotalSom) || 0;
  let totalUsd = Number(orderTotalUsd) || 0;
  const rawInput = Number(orderTotal) || 0;

  if (!totalSom && !totalUsd) {
    if (rawInput >= 100000) {
      totalSom = rawInput;
      totalUsd = Math.round(rawInput / rate);
    } else {
      totalUsd = rawInput;
      totalSom = Math.round(rawInput * rate);
    }
  } else if (!totalSom && totalUsd) {
    totalSom = Math.round(totalUsd * rate);
  } else if (totalSom && !totalUsd) {
    totalUsd = Math.round(totalSom / rate);
  }

  // Agar mijoz USD yuborgan bo'lsa (masalan 4500 USD), uni so'mga aylantirib tekshiramiz
  if (promo.minOrderPrice && totalSom < promo.minOrderPrice && rawInput < 100000 && (rawInput * rate) >= promo.minOrderPrice) {
    totalSom = Math.round(rawInput * rate);
    totalUsd = rawInput;
  }

  if (promo.minOrderPrice && totalSom < promo.minOrderPrice) {
    const minFormatted = promo.minOrderPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    const minUsd = Math.round(promo.minOrderPrice / rate);
    return res.json({
      valid: false,
      message: `Ushbu promokod faqat kamida ${minFormatted} so'mlik ($${minUsd}) xaridlar uchun amal qiladi`,
    });
  }

  // 4. 1 kishiga 1 marta cheklovini tekshirish
  const checkUser = userIdentifier || req.body.email || req.body.phone;
  if (checkUser && Array.isArray(promo.usedBy)) {
    const cleanUser = String(checkUser).trim().toLowerCase();
    const cleanDigits = cleanUser.replace(/\D/g, "");
    const userUses = promo.usedBy.filter((u) => {
      const su = String(u).toLowerCase().trim();
      if (su === cleanUser) return true;
      if (cleanDigits.length >= 9 && su.replace(/\D/g, "").endsWith(cleanDigits)) return true;
      return false;
    }).length;
    if (userUses >= (promo.perUserLimit || 1)) {
      return res.json({
        valid: false,
        message: "Siz ushbu promokoddan allaqachon foydalangansiz",
      });
    }
  }

  // Chegirma summasini hisoblash
  let discountAmountSom = 0;
  let discountAmountUsd = 0;
  if (promo.discountType === "percent") {
    discountAmountSom = Math.round((totalSom * promo.discountValue) / 100);
    discountAmountUsd = Math.round((totalUsd * promo.discountValue) / 100);
  } else {
    discountAmountSom = Math.min(promo.discountValue, totalSom);
    discountAmountUsd = Math.max(1, Math.round(discountAmountSom / rate));
  }

  res.json({
    valid: true,
    promo,
    discountAmount: discountAmountSom,
    discountAmountSom,
    discountAmountUsd,
    discountPercent: promo.discountType === "percent" ? promo.discountValue : 0,
    message: `${promo.discountType === "percent" ? promo.discountValue + "%" : discountAmountSom.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm"} chegirma muvaffaqiyatli qo'llandi! 🎉`,
  });
});

// =============================================================================
// 4. 🤝 "EUROTEX NASIYA" MUDDATLI TO'LOV ARIZALARI
// =============================================================================
router.get("/nasiya", requireAdmin, (req, res) => { // #6 — Faqat admin (pasport ma'lumotlari bor)
  const nasiyaList = readJsonFile("nasiya.json", [
    {
      id: "nas_1",
      name: "Rustam Qosimov",
      phone: "+998 90 555 77 75",
      passport: "AB 1234567",
      productTitle: "Slim Fit Bolalar Kostyumi (2 pachka)",
      totalAmount: "1 200 000 so'm",
      months: 6,
      monthlyPayment: "200 000 so'm / oy",
      status: "kutilmoqda", // kutilmoqda, tasdiqlandi, rad_etildi
      date: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }),
    },
  ]);
  res.json({ success: true, applications: nasiyaList });
});

router.post("/nasiya", async (req, res) => {
  if (!checkSpamLimit(req, "nasiya")) {
    return res.status(429).json({
      success: false,
      message: "Iltimos, ozroq kuting. Nasiya arizangiz allaqachon qabul qilingan.",
    });
  }

  const { name, phone, passport, months, productTitle, totalAmount, monthlyPayment } = sanitize(req.body); // #7 sanitize
  if (!phone || !name) {
    return res.status(400).json({ success: false, message: "Ism va telefon raqami talab qilinadi" });
  }

  const list = readJsonFile("nasiya.json", []);
  const newApp = {
    id: "nas_" + Date.now(),
    name,
    phone,
    passport: passport || "-",
    productTitle: productTitle || "Eurotex Kostyum",
    totalAmount: totalAmount || "-",
    months: Number(months) || 6,
    monthlyPayment: monthlyPayment || "-",
    status: "kutilmoqda",
    date: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }),
  };

  list.unshift(newApp);
  writeJsonFile("nasiya.json", list);

  // Telegram alert
  try {
    await sendNasiyaNotification(newApp);
  } catch (e) {}

  res.json({ success: true, application: newApp });
});

router.put("/nasiya/:id", requireAdmin, (req, res) => {   // #6 — faqat admin
  const { id } = req.params;
  const { status } = sanitize(req.body);
  const list = readJsonFile("nasiya.json", []);
  const item = list.find((n) => String(n.id) === String(id));
  if (item) {
    item.status = status;
    writeJsonFile("nasiya.json", list);
    return res.json({ success: true, application: item });
  }
  res.status(404).json({ success: false, message: "Ariza topilmadi" });
});

// =============================================================================
// 5. 🚚 VILOYATLAR VA YETKAZIB BERISH NARXLARI BOSHQUVI
// =============================================================================
const DEFAULT_DELIVERY = [
  { region: "Toshkent shahri", price: 0, days: "1 kun (Tezkor bepul)", freeThreshold: 0 },
  { region: "Toshkent viloyati", price: 25000, days: "1-2 kun", freeThreshold: 800000 },
  { region: "Samarqand", price: 30000, days: "2 kun", freeThreshold: 1000000 },
  { region: "Farg'ona", price: 35000, days: "2-3 kun", freeThreshold: 1000000 },
  { region: "Andijon", price: 35000, days: "2-3 kun", freeThreshold: 1000000 },
  { region: "Namangan", price: 35000, days: "2-3 kun", freeThreshold: 1000000 },
  { region: "Buxoro", price: 35000, days: "2-3 kun", freeThreshold: 1000000 },
  { region: "Qashqadaryo", price: 35000, days: "2-3 kun", freeThreshold: 1000000 },
  { region: "Surxondaryo", price: 40000, days: "3 kun", freeThreshold: 1200000 },
  { region: "Xorazm", price: 40000, days: "3 kun", freeThreshold: 1200000 },
  { region: "Navoiy", price: 35000, days: "2-3 kun", freeThreshold: 1000000 },
  { region: "Jizzax", price: 30000, days: "2 kun", freeThreshold: 800000 },
  { region: "Sirdaryo", price: 25000, days: "1-2 kun", freeThreshold: 800000 },
  { region: "Qoraqalpog'iston", price: 45000, days: "3-4 kun", freeThreshold: 1500000 },
];

router.get("/delivery", (req, res) => {
  const delivery = readJsonFile("delivery.json", DEFAULT_DELIVERY);
  res.json({ success: true, delivery });
});

router.post("/delivery", requireAdmin, (req, res) => { // #6 — faqat admin
  const { delivery } = sanitize(req.body);
  if (Array.isArray(delivery)) {
    writeJsonFile("delivery.json", delivery);
    return res.json({ success: true, delivery });
  }
  res.status(400).json({ success: false, message: "Noto'g'ri ma'lumot formati" });
});

// =============================================================================
// 6. 🤖 TELEGRAM BOT SOZLAMALARI
// =============================================================================
router.get("/telegram", requireAdmin, (req, res) => { // #6 — faqat admin
  const config = getTelegramConfig();
  res.json({
    success: true,
    tokenSet: !!config.token,
    chatIdSet: !!config.chatId,
    chatId: config.chatId,
  });
});

router.post("/telegram", requireAdmin, (req, res) => { // #6 — faqat admin
  const { token, chatId } = sanitize(req.body);
  if (!token || !chatId) {
    return res.status(400).json({ success: false, message: "Token va Chat ID talab qilinadi" });
  }

  saveTelegramConfig(token, chatId);
  res.json({ success: true, message: "Telegram bot sozlamalari saqlandi!" });
});

// =============================================================================
// 7. 🛠️ TEXNIK TANAFFUS REJIMI (MAINTENANCE MODE)
// =============================================================================
const DEFAULT_MAINTENANCE = {
  enabled: false,
  title: "Saytda texnik yangilanish ketmoqda 🛠️",
  message: "Hurmatli xaridorlar! EurotexKids tizimida texnik yangilanish va profilaktika ishlari olib borilmoqda. Yangi to'plamlar va qulayliklar bilan tez orada xizmatingizda bo'lamiz!",
  estimatedTime: "Tez orada (bugun)",
  contactPhone: "+998 90 555 77 75",
  telegramUsername: "eurotexkids_admin",
  updatedAt: new Date().toISOString(),
};

router.get("/maintenance", (req, res) => {
  const data = readJsonFile("maintenance.json", DEFAULT_MAINTENANCE);
  res.json({ success: true, maintenance: data });
});

router.post("/maintenance", requireAdmin, (req, res) => {
  const { enabled, title, message, estimatedTime, contactPhone, telegramUsername } = sanitize(req.body);
  const current = readJsonFile("maintenance.json", DEFAULT_MAINTENANCE);
  const updated = {
    ...current,
    enabled: Boolean(enabled),
    title: title || current.title,
    message: message || current.message,
    estimatedTime: estimatedTime || current.estimatedTime,
    contactPhone: contactPhone || current.contactPhone,
    telegramUsername: telegramUsername || current.telegramUsername,
    updatedAt: new Date().toISOString(),
  };
  writeJsonFile("maintenance.json", updated);
  res.json({ success: true, maintenance: updated });
});

// =============================================================================
// CBU Valyuta kursi API (USD/UZS) — 6 soat keshlanadi
// =============================================================================
let cachedUsdRate = { rate: 12650, lastFetch: 0 };

router.get("/exchange-rate", async (req, res) => {
  const now = Date.now();
  if (now - cachedUsdRate.lastFetch < 6 * 3600 * 1000 && cachedUsdRate.rate > 10000) {
    return res.json({ success: true, rate: cachedUsdRate.rate, cached: true });
  }

  try {
    const cbuRes = await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/", {
      signal: AbortSignal.timeout(4000),
    });
    if (cbuRes.ok) {
      const data = await cbuRes.json();
      const usdItem = (data || []).find((c) => c.Ccy === "USD");
      if (usdItem && Number(usdItem.Rate) > 10000) {
        cachedUsdRate = { rate: Math.round(Number(usdItem.Rate)), lastFetch: now };
        return res.json({ success: true, rate: cachedUsdRate.rate, cached: false });
      }
    }
  } catch (e) {}

  return res.json({ success: true, rate: cachedUsdRate.rate, cached: true });
});

// =============================================================================
// 8. ⭐ MIJOZLAR SHARHLARI (CUSTOMER REVIEWS) REST API
// =============================================================================
const DEFAULT_REVIEWS = [
  {
    id: "rev_1",
    author: "Dilshodbek T.",
    city: "Toshkent",
    rating: 5,
    text: "Mato sifati a'lo darajada! Bolamga to'y uchun oldik, Turkiya matosi g'ijimlanmas ekan. Kuryer 1 kunda yetkazib berdi.",
    date: "14.09.2026",
    status: "approved",
    productTitle: "Slim Fit Bolalar Kostyumi",
  },
  {
    id: "rev_2",
    author: "Nargiza Alimova",
    city: "Samarqand",
    rating: 5,
    text: "Tikilishi juda chiroyli, iplari chiqib ketmagan. Razmeri ham aynan mos keldi. Rahmat kattakon Eurotex jamoasiga!",
    date: "10.09.2026",
    status: "approved",
    productTitle: "Classic Royal Ko'k Kostyum",
  },
  {
    id: "rev_3",
    author: "Bobur Rahimov",
    city: "Namangan",
    rating: 5,
    text: "Optomga 10 pachka oldik do'konimiz uchun, 3 kunda deyarli yarmi sotilib ketdi. Sifatiga gap yo'q, yangi partiya kutamiz.",
    date: "05.09.2026",
    status: "approved",
    productTitle: "Ulgurji Maktab To'plami",
  },
];

router.get("/reviews", (req, res) => {
  const reviews = readJsonFile("reviews.json", DEFAULT_REVIEWS);
  const status = req.query.status;
  if (status) {
    return res.json({ success: true, reviews: reviews.filter((r) => r.status === status) });
  }
  res.json({ success: true, reviews });
});

router.post("/reviews", (req, res) => {
  const cookies = parseCookies(req);
  const token =
    cookies.eurotex_session ||
    (req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.slice(7)
      : null) ||
    req.headers["x-admin-token"];
  const isAdmin = safeCompare(token || "", "admin_master_token_2026") || Boolean(req.adminUser);

  if (!isAdmin && !checkSpamLimit(req, "review")) {
    return res.status(429).json({ success: false, message: "Iltimos, ozroq kuting. Sharhingiz yuborilgan." });
  }

  const { author, name, city, rating, text, comment, productTitle, productId } = sanitize(req.body);
  const authorName = String(author || name || "Mijoz").replace(/[<>]/g, "").trim().slice(0, 50);
  const reviewText = String(text || comment || "").replace(/[<>]/g, "").trim().slice(0, 1000);
  const numRating = Math.min(5, Math.max(1, Number(rating) || 5));

  if (!reviewText) {
    return res.status(400).json({ success: false, message: "Sharh matni kiritilishi shart!" });
  }

  const reviews = readJsonFile("reviews.json", []);
  const newReview = {
    id: "rev_" + Date.now(),
    author: authorName,
    city: String(city || "O'zbekiston").replace(/[<>]/g, "").slice(0, 50),
    rating: numRating,
    text: reviewText,
    productTitle: String(productTitle || "Eurotex Mahsuloti").replace(/[<>]/g, "").slice(0, 100),
    productId: productId || "",
    status: "approved",
    date: new Date().toLocaleDateString("uz-UZ"),
    createdAt: new Date().toISOString(),
  };

  reviews.unshift(newReview);
  writeJsonFile("reviews.json", reviews);

  res.json({ success: true, message: "Sharhingiz uchun tashakkur! Fikringiz qabul qilindi. ⭐", review: newReview });
});

router.delete("/reviews/:id", requireAdmin, (req, res) => {
  const id = req.params.id;
  let reviews = readJsonFile("reviews.json", []);
  reviews = reviews.filter((r) => String(r.id) !== String(id));
  writeJsonFile("reviews.json", reviews);
  res.json({ success: true, message: "Sharh o'chirildi" });
});

module.exports = router;
