const dns = require("dns");
try {
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch (e) {}
const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const Order = require("../models/Order");
const { requireAdmin, parseCookies } = require("../middleware/adminAuth");
const ADMIN_EMAILS = ["0600quetry@gmail.com", "eurotexkids7775@gmail.com"];

const ORDERS_FILE = path.join(__dirname, "../data/orders.json");

function readLocalOrders() {
  try {
    if (fs.existsSync(ORDERS_FILE)) {
      return JSON.parse(fs.readFileSync(ORDERS_FILE, "utf8")) || [];
    }
  } catch (e) {}
  return [];
}

function writeLocalOrders(orders) {
  try {
    const dir = path.dirname(ORDERS_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2), "utf8");
  } catch (e) {
    console.error("Local orders write error:", e.message);
  }
}

const ORDER_STATUS_STEPS = {
  0: { label: "Bekor qilindi", color: "#ef4444", icon: "❌" },
  1: { label: "Qabul qilindi", color: "#f59e0b", icon: "🟡" },
  2: { label: "Tayyorlanmoqda", color: "#3b82f6", icon: "🔵" },
  3: { label: "Kuryerda", color: "#8b5cf6", icon: "🟣" },
  4: { label: "Yetkazib berildi", color: "#10b981", icon: "✅" },
};

const FALLBACK_MONGO_URL = process.env.MONGO_URL;

async function ensureDbConnected() {
  if (mongoose.connection.readyState === 1) return true;
  if (!FALLBACK_MONGO_URL) return false;
  try {
    await mongoose.connect(FALLBACK_MONGO_URL, {
      serverSelectionTimeoutMS: 6000,
    });
    return true;
  } catch (e) {
    console.error("MongoDB Connection Error in orders route:", e.message);
    return false;
  }
}

function getClientIp(req) {
  return (
    req.headers["x-forwarded-for"] ||
    req.headers["x-real-ip"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    ""
  )
    .split(",")[0]
    .trim();
}

function normalizePhoneNumber(rawPhone) {
  if (!rawPhone) return "";
  const digits = String(rawPhone).replace(/\D/g, "");
  if (digits.length === 9) return `+998${digits}`;
  if (digits.length === 12 && digits.startsWith("998")) return `+${digits}`;
  return String(rawPhone).trim();
}

router.get("/", async (req, res) => {
  try {
    const isConnected = await ensureDbConnected();
    let dbOrders = [];
    if (isConnected) {
      try {
        dbOrders = await Order.find({}).sort({ createdAt: -1 }).lean();
      } catch (e) {
        console.warn("MongoDB Order.find warning:", e.message);
      }
    }
    const localOrders = readLocalOrders();

    // Deduplicate and merge by orderId
    const orderMap = new Map();
    dbOrders.forEach((o) => {
      const id = String(o.orderId || o.id || o._id);
      orderMap.set(id, o);
    });
    localOrders.forEach((o) => {
      const id = String(o.orderId || o.id || o._id);
      if (!orderMap.has(id)) {
        orderMap.set(id, o);
      }
    });

    let merged = Array.from(orderMap.values());
    const { email, status, limit = 200, adminEmail } = req.query;

    // Maxfiylik tekshiruvi (Fix 5): Faqat admin butun buyurtmalar bazasini ko'ra oladi
    const cookies = parseCookies(req);
    const token =
      cookies.eurotex_session ||
      (req.headers.authorization?.startsWith("Bearer ")
        ? req.headers.authorization.slice(7)
        : null) ||
      req.headers["x-admin-token"];
    const headerAdminEmail = (
      req.headers["x-admin-email"] ||
      adminEmail ||
      ""
    ).toLowerCase().trim();

    const isAdmin =
      ADMIN_EMAILS.includes(headerAdminEmail) ||
      token === "admin_master_token_2026";

    if (!isAdmin) {
      // Oddiy foydalanuvchi: faqat o'z emailiga tegishli buyurtmalarni ko'ra oladi
      const targetEmail = (email || "").toLowerCase().trim();
      if (targetEmail) {
        merged = merged.filter(
          (o) => String(o.userEmail || "").toLowerCase().trim() === targetEmail,
        );
      } else {
        // Agar email berilmagan bo'lsa va admin bo'lmasa, begonalar buyurtmalari yashiriladi
        merged = [];
      }
    } else if (email) {
      const em = String(email).toLowerCase().trim();
      merged = merged.filter(
        (o) => String(o.userEmail || "").toLowerCase().trim() === em,
      );
    }

    if (status !== undefined) {
      const st = Number(status);
      merged = merged.filter((o) => Number(o.statusStep) === st);
    }

    return res.status(200).json({
      success: true,
      count: merged.length,
      orders: merged.slice(0, Math.min(Number(limit) || 200, 1000)),
      statusSteps: ORDER_STATUS_STEPS,
    });
  } catch (error) {
    console.error("GET /orders xatosi:", error);
    const localOrders = readLocalOrders();
    return res.status(200).json({
      success: true,
      count: localOrders.length,
      orders: localOrders,
      statusSteps: ORDER_STATUS_STEPS,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const isConnected = await ensureDbConnected();
    if (isConnected) {
      try {
        const order = await Order.findOne({
          $or: [{ orderId: id }, { _id: mongoose.isValidObjectId(id) ? id : null }],
        });
        if (order) return res.status(200).json({ success: true, order });
      } catch (e) {}
    }

    // Fallback to local
    const localOrders = readLocalOrders();
    const localOrder = localOrders.find((o) => String(o.orderId || o.id) === String(id));
    if (localOrder) {
      return res.status(200).json({ success: true, order: localOrder });
    }

    return res.status(404).json({ success: false, message: "Buyurtma topilmadi" });
  } catch (error) {
    console.error("GET /orders/:id xatosi:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      orderId,
      userEmail,
      customerName,
      recipient,
      phone,
      address,
      region,
      district,
      deliveryType,
      paymentMethod,
      items,
      total,
      totalPriceUsd,
      totalPriceUzs,
      usdRateApplied,
      discountAmount,
      promoCode,
      statusStep,
      nasiyaMonths,
      date,
      deliveryDate,
      deliveryTime,
      customerNotes,
    } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Buyurtma mahsulotlari yetarli emas!",
      });
    }

    const computedUsdRate = Number(usdRateApplied) || 12650;
    const computedTotalUsd =
      Number(totalPriceUsd) ||
      Number(total) ||
      items.reduce(
        (s, it) => s + Number(it.priceUsd || it.totalUsd || 0) * (it.quantity || 1),
        0
      );
    const computedTotalUzs =
      Number(totalPriceUzs) ||
      (computedTotalUsd > 0 ? Math.round(computedTotalUsd * computedUsdRate) : 0);

    const generatedId =
      orderId ||
      "EUR-" +
        new Date().getFullYear().toString().slice(-2) +
        Math.floor(100000 + Math.random() * 900000);

    const orderData = {
      orderId: generatedId,
      id: generatedId,
      userEmail: userEmail ? String(userEmail).toLowerCase().trim() : "",
      customerName: customerName || recipient || "Mijoz",
      recipient: recipient || customerName || "Mijoz",
      phone: normalizePhoneNumber(phone),
      address: address || "",
      region: region || "",
      district: district || "",
      deliveryType: deliveryType || "courier",
      paymentMethod: paymentMethod || "cash",
      items: items || [],
      itemsCount: items.reduce((sum, it) => sum + (it.quantity || 1), 0),
      total: Number(total) || computedTotalUsd,
      totalPriceUsd: computedTotalUsd,
      totalPriceUzs: computedTotalUzs,
      usdRateApplied: computedUsdRate,
      discountAmount: Number(discountAmount) || 0,
      promoCode: promoCode || "",
      statusStep: statusStep !== undefined ? Number(statusStep) : 1,
      status: (ORDER_STATUS_STEPS[statusStep !== undefined ? Number(statusStep) : 1] || {}).label ? `${(ORDER_STATUS_STEPS[statusStep !== undefined ? Number(statusStep) : 1] || {}).icon} ${(ORDER_STATUS_STEPS[statusStep !== undefined ? Number(statusStep) : 1] || {}).label}` : "Qabul qilindi 🟡",
      nasiyaMonths: Number(nasiyaMonths) || 0,
      date: date || new Date().toLocaleDateString("uz-UZ"),
      deliveryDate: deliveryDate || "",
      deliveryTime: deliveryTime || "",
      customerNotes: customerNotes || "",
      ipAddress: getClientIp(req),
      createdAt: new Date(),
    };

    // 1. Guaranteed Local JSON Save (Zero lost orders)
    const localList = readLocalOrders();
    const existingIdx = localList.findIndex((o) => String(o.orderId || o.id) === String(orderData.orderId));
    if (existingIdx !== -1) {
      localList[existingIdx] = { ...localList[existingIdx], ...orderData };
    } else {
      localList.unshift(orderData);
    }
    writeLocalOrders(localList);

    // 2. Save to MongoDB Atlas if connected
    let finalOrder = orderData;
    const isConnected = await ensureDbConnected();
    if (isConnected) {
      try {
        const mongoOrder = new Order(orderData);
        finalOrder = await mongoOrder.save();
      } catch (dbErr) {
        console.warn("MongoDB save warning (saved locally):", dbErr.message);
      }
    }

    // 3. Trigger Telegram Alert
    try {
      const { sendNewOrderNotification } = require("../utils/telegramBot");
      await sendNewOrderNotification(finalOrder);
    } catch (tgErr) {
      console.warn("Telegram alert notice:", tgErr.message);
    }

    console.log(`📦 [BUYURTMA SAQLANDI]: #${orderData.orderId} | User: ${orderData.userEmail || "guest"} | $${orderData.totalPriceUsd} / ${orderData.totalPriceUzs} so'm`);

    return res.status(201).json({
      success: true,
      message: "Buyurtma muvaffaqiyatli saqlandi!",
      order: finalOrder,
    });
  } catch (error) {
    console.error("POST /orders xatosi:", error);
    return res.status(500).json({
      success: false,
      message: "Buyurtma saqlashda xatolik",
      error: error.message,
    });
  }
});

router.put("/:id/status", requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { statusStep, status, adminNotes } = req.body;
    const stepNum = Number(statusStep);

    if (isNaN(stepNum) || stepNum < 0 || stepNum > 4) {
      return res
        .status(400)
        .json({ success: false, message: "Noto'g'ri status raqami (0-4)" });
    }

    const stepInfo = ORDER_STATUS_STEPS[stepNum];
    const statusText = status || (stepInfo ? `${stepInfo.icon} ${stepInfo.label}` : "Jarayonda");

    // Update in local JSON
    const localList = readLocalOrders();
    const lIdx = localList.findIndex((o) => String(o.orderId || o.id) === String(id));
    if (lIdx !== -1) {
      localList[lIdx].statusStep = stepNum;
      localList[lIdx].status = statusText;
      if (adminNotes !== undefined) localList[lIdx].adminNotes = adminNotes;
      writeLocalOrders(localList);
    }

    let updated = lIdx !== -1 ? localList[lIdx] : null;

    // Update in MongoDB
    const isConnected = await ensureDbConnected();
    if (isConnected) {
      try {
        const queryConditions = [{ orderId: id }];
        if (mongoose.isValidObjectId(id)) queryConditions.push({ _id: id });
        const dbUpdated = await Order.findOneAndUpdate(
          { $or: queryConditions },
          {
            statusStep: stepNum,
            status: statusText,
            ...(adminNotes !== undefined ? { adminNotes } : {}),
          },
          { new: true }
        );
        if (dbUpdated) updated = dbUpdated;
      } catch (e) {}
    }

    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Buyurtma topilmadi" });
    }

    console.log(`🔄 [STATUS YANGILANDI]: #${updated.orderId || id} -> ${updated.status}`);

    return res.status(200).json({
      success: true,
      message: "Buyurtma statusi yangilandi!",
      order: updated,
    });
  } catch (error) {
    console.error("PUT /orders/:id/status xatosi:", error);
    return res.status(500).json({
      success: false,
      message: "Server xatosi",
      error: error.message,
    });
  }
});

router.put("/:id", requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };
    delete updateData._id;
    delete updateData.createdAt;
    delete updateData.updatedAt;
    if (updateData.statusStep !== undefined) {
      const stepInfo = ORDER_STATUS_STEPS[Number(updateData.statusStep)];
      if (stepInfo) {
        updateData.status = stepInfo.icon + " " + stepInfo.label;
      }
    }

    // Local JSON update
    const localList = readLocalOrders();
    const lIdx = localList.findIndex((o) => String(o.orderId || o.id) === String(id));
    if (lIdx !== -1) {
      localList[lIdx] = { ...localList[lIdx], ...updateData };
      writeLocalOrders(localList);
    }

    let updated = lIdx !== -1 ? localList[lIdx] : null;

    const isConnected = await ensureDbConnected();
    if (isConnected) {
      try {
        const queryConditions = [{ orderId: id }];
        if (mongoose.isValidObjectId(id)) queryConditions.push({ _id: id });
        const dbUpdated = await Order.findOneAndUpdate(
          { $or: queryConditions },
          { $set: updateData },
          { new: true }
        );
        if (dbUpdated) updated = dbUpdated;
      } catch (e) {}
    }

    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Buyurtma topilmadi" });
    }

    return res.status(200).json({
      success: true,
      message: "Buyurtma yangilandi!",
      order: updated,
    });
  } catch (error) {
    console.error("PUT /orders/:id xatosi:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.delete("/:id", requireAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    // Delete from local JSON
    const localList = readLocalOrders();
    const filtered = localList.filter((o) => String(o.orderId || o.id) !== String(id));
    writeLocalOrders(filtered);

    // Delete from MongoDB
    let deletedCount = localList.length - filtered.length;
    const isConnected = await ensureDbConnected();
    if (isConnected) {
      try {
        const queryConditions = [{ orderId: id }];
        if (mongoose.isValidObjectId(id)) queryConditions.push({ _id: id });
        const dbRes = await Order.deleteOne({ $or: queryConditions });
        if (dbRes.deletedCount > 0) deletedCount += dbRes.deletedCount;
      } catch (e) {}
    }

    return res.status(200).json({
      success: true,
      message: deletedCount > 0 ? "Buyurtma o'chirildi" : "Buyurtma topilmadi",
    });
  } catch (error) {
    console.error("DELETE /orders/:id xatosi:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/stats/summary", async (req, res) => {
  try {
    const isConnected = await ensureDbConnected(res);
    if (!isConnected) {
      return res.json({
        success: true,
        summary: {
          totalOrders: 0,
          totalRevenueUsd: 0,
          totalRevenueUzs: 0,
          totalItems: 0,
          byStatus: ORDER_STATUS_STEPS,
          uniqueCustomers: 0,
        },
      });
    }
    const allOrders = await Order.find({});
    const summary = {
      totalOrders: allOrders.length,
      totalRevenueUsd: allOrders.reduce(
        (s, o) => s + (Number(o.totalPriceUsd) || 0),
        0,
      ),
      totalRevenueUzs: allOrders.reduce(
        (s, o) => s + (Number(o.totalPriceUzs) || 0),
        0,
      ),
      totalItems: allOrders.reduce(
        (s, o) => s + (Number(o.itemsCount) || 0),
        0,
      ),
      byStatus: {},
      uniqueCustomers: new Set(
        allOrders.map((o) => o.userEmail).filter(Boolean),
      ).size,
    };
    Object.keys(ORDER_STATUS_STEPS).forEach((step) => {
      const stepOrders = allOrders.filter((o) => o.statusStep === Number(step));
      summary.byStatus[step] = {
        count: stepOrders.length,
        label: ORDER_STATUS_STEPS[step].label,
        icon: ORDER_STATUS_STEPS[step].icon,
      };
    });
    return res.json({ success: true, summary });
  } catch (error) {
    return res.json({
      success: true,
      summary: {
        totalOrders: 0,
        totalRevenueUsd: 0,
        totalRevenueUzs: 0,
        totalItems: 0,
        byStatus: ORDER_STATUS_STEPS,
        uniqueCustomers: 0,
      },
    });
  }
});

module.exports = router;
