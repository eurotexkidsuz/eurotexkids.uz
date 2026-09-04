const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const sanitize = require("mongo-sanitize"); // #7 MongoDB Injection himoyasi
const { requireAdmin } = require("../middleware/adminAuth"); // #6 Admin API himoyasi
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

function writeJsonFile(filename, data) {
  const filePath = path.join(DATA_DIR, filename);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (e) {
    console.error(`Error writing ${filename}:`, e);
    return false;
  }
}

// =============================================================================
// 1. ⚡ 1-KLIKDA XARID VA TEZKOR QO'NG'IROQLAR (LEADS)
// =============================================================================
router.get("/leads", requireAdmin, (req, res) => {   // #6 — faqat admin
  const leads = readJsonFile("leads.json", [
    {
      id: "lead_1",
      name: "Akmal Saidov",
      phone: "+998 90 123 45 67",
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
  // #7 MongoDB sanitize — injection himoyasi
  const { name, phone, productTitle, size, color, price } = sanitize(req.body);
  if (!phone) {
    return res.status(400).json({ success: false, message: "Telefon raqami kiritilishi shart" });
  }

  const leads = readJsonFile("leads.json", []);
  const newLead = {
    id: "lead_" + Date.now(),
    name: name || "Xaridor",
    phone,
    productTitle: productTitle || "Eurotex Kostyum",
    size: size || "-",
    color: color || "-",
    price: price || "-",
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
    let dbUsers = [];
    try {
      dbUsers = await User.find().sort({ createdAt: -1 }).limit(300).lean();
    } catch (e) {}

    let orders = [];
    try {
      orders = await Order.find().lean();
    } catch (e) {}

    // Aggregate user stats
    const usersMap = new Map();

    dbUsers.forEach((u) => {
      const email = String(u.email || "").toLowerCase();
      usersMap.set(email, {
        id: u._id,
        email: u.email,
        name: u.name || u.email.split("@")[0],
        phone: u.phone || "-",
        city: u.city || "Toshkent",
        ordersCount: 0,
        totalSpent: 0,
        role: u.role || "user",
        createdAt: u.createdAt || new Date(),
      });
    });

    // Compute orders from Order collection
    orders.forEach((o) => {
      const email = String(o.userEmail || "").toLowerCase();
      if (!email) return;
      let user = usersMap.get(email);
      if (!user) {
        user = {
          id: "guest_" + email,
          email: o.userEmail,
          name: o.customerName || o.recipient || email.split("@")[0],
          phone: o.phone || "-",
          city: o.region || "O'zbekiston",
          ordersCount: 0,
          totalSpent: 0,
          role: "customer",
          createdAt: o.createdAt || new Date(),
        };
        usersMap.set(email, user);
      }
      user.ordersCount += 1;
      user.totalSpent += Number(o.totalPriceUzs || o.total || 0);
      if (o.phone && (!user.phone || user.phone === "-")) user.phone = o.phone;
    });

    const list = Array.from(usersMap.values());
    res.json({ success: true, users: list });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
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

router.get("/promocodes", (req, res) => {   // foydalanuvchilar validate qilishi mumkin
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

  // 3. Minimal buyurtma summasini tekshirish
  const total = Number(orderTotal) || 0;
  if (promo.minOrderPrice && total < promo.minOrderPrice) {
    const minFormatted = promo.minOrderPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return res.json({
      valid: false,
      message: `Ushbu promokod faqat kamida ${minFormatted} so'mlik xaridlar uchun amal qiladi`,
    });
  }

  // 4. 1 kishiga 1 marta cheklovini tekshirish
  if (userIdentifier && Array.isArray(promo.usedBy)) {
    const cleanUser = String(userIdentifier).trim().toLowerCase();
    const userUses = promo.usedBy.filter((u) => String(u).toLowerCase() === cleanUser).length;
    if (userUses >= (promo.perUserLimit || 1)) {
      return res.json({
        valid: false,
        message: "Siz ushbu promokoddan allaqachon foydalangansiz",
      });
    }
  }

  // Chegirma summasini hisoblash
  let discountAmount = 0;
  if (promo.discountType === "percent") {
    discountAmount = Math.round((total * promo.discountValue) / 100);
  } else {
    discountAmount = Math.min(promo.discountValue, total);
  }

  res.json({
    valid: true,
    promo,
    discountAmount,
    message: `${promo.discountType === "percent" ? promo.discountValue + "%" : promo.discountValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm"} chegirma qo'llandi! 🎉`,
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
      phone: "+998 93 456 78 90",
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

router.post("/telegram/test", requireAdmin, async (req, res) => { // #6 — faqat admin
  const ok = await sendTelegramMessage(
    "🔔 <b>EUROTEX ADMIN TEST:</b> Telegram bot muvaffaqiyatli ulandi! Yangi buyurtmalar shu yerga keladi. 🚀",
  );
  if (ok) {
    res.json({ success: true, message: "Test xabari Telegramga yuborildi! ✅" });
  } else {
    res.status(400).json({ success: false, message: "Xabar yuborishda xatolik. Token yoki Chat ID noto'g'ri." });
  }
});

module.exports = router;
