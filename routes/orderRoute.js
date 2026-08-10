const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Order = require("../models/Order");

const ORDER_STATUS_STEPS = {
  0: { label: "Bekor qilindi", color: "#ef4444", icon: "❌" },
  1: { label: "Qabul qilindi", color: "#f59e0b", icon: "🟡" },
  2: { label: "Tayyorlanmoqda", color: "#3b82f6", icon: "🔵" },
  3: { label: "Kuryerda", color: "#8b5cf6", icon: "🟣" },
  4: { label: "Yetkazib berildi", color: "#10b981", icon: "✅" },
};

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

router.get("/", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(
        process.env.MONGO_URL ||
          "mongodb+srv://eurotexkids7775_db_user:yro1XElCJariRjzw@eurotexkidsuz.ntrgl4x.mongodb.net/?appName=Eurotexkidsuz",
        { serverSelectionTimeoutMS: 10000 },
      );
    }
    const { email, status, limit = 200 } = req.query;
    const query = {};
    if (email) query.userEmail = String(email).toLowerCase();
    if (status !== undefined) query.statusStep = Number(status);

    const orders = await Order.find(query)
      .sort({ createdAt: -1 })
      .limit(Math.min(Number(limit) || 200, 1000));

    return res.status(200).json({
      success: true,
      count: orders.length,
      orders,
      statusSteps: ORDER_STATUS_STEPS,
    });
  } catch (error) {
    console.error("GET /orders xatosi:", error);
    return res.status(200).json({
      success: true,
      count: 0,
      orders: [],
      statusSteps: ORDER_STATUS_STEPS,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(
        process.env.MONGO_URL ||
          "mongodb+srv://eurotexkids7775_db_user:yro1XElCJariRjzw@eurotexkidsuz.ntrgl4x.mongodb.net/?appName=Eurotexkidsuz",
        { serverSelectionTimeoutMS: 10000 },
      );
    }
    const { id } = req.params;
    const order = await Order.findOne({
      $or: [{ orderId: id }, { _id: mongoose.isValidObjectId(id) ? id : null }],
    });
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Buyurtma topilmadi" });
    }
    return res.status(200).json({ success: true, order });
  } catch (error) {
    console.error("GET /orders/:id xatosi:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(
        process.env.MONGO_URL ||
          "mongodb+srv://eurotexkids7775_db_user:yro1XElCJariRjzw@eurotexkidsuz.ntrgl4x.mongodb.net/?appName=Eurotexkidsuz",
        { serverSelectionTimeoutMS: 10000 },
      );
    }

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
      return res
        .status(400)
        .json({
          success: false,
          message: "Buyurtma mahsulotlari yetarli emas!",
        });
    }

    const computedUsdRate = Number(usdRateApplied) || 12650;
    const computedTotalUsd =
      Number(totalPriceUsd) ||
      Number(total) ||
      items.reduce(
        (s, it) =>
          s + Number(it.priceUsd || it.totalUsd || 0) * (it.quantity || 1),
        0,
      );
    const computedTotalUzs =
      Number(totalPriceUzs) ||
      (computedTotalUsd > 0
        ? Math.round(computedTotalUsd * computedUsdRate)
        : 0);

    const newOrder = new Order({
      orderId:
        orderId ||
        "EUR-" +
          new Date().getFullYear().toString().slice(-2) +
          Math.floor(100000 + Math.random() * 900000),
      userEmail: userEmail ? String(userEmail).toLowerCase() : "",
      customerName: customerName || recipient || "Mijoz",
      recipient: recipient || customerName || "Mijoz",
      phone: phone || "",
      address: address || "",
      region: region || "",
      district: district || "",
      deliveryType: deliveryType || "courier",
      paymentMethod: paymentMethod || "cash",
      items: items || [],
      total: Number(total) || computedTotalUsd,
      totalPriceUsd: computedTotalUsd,
      totalPriceUzs: computedTotalUzs,
      usdRateApplied: computedUsdRate,
      discountAmount: Number(discountAmount) || 0,
      promoCode: promoCode || "",
      statusStep: statusStep !== undefined ? Number(statusStep) : 1,
      nasiyaMonths: Number(nasiyaMonths) || 0,
      date: date || "",
      deliveryDate: deliveryDate || "",
      deliveryTime: deliveryTime || "",
      customerNotes: customerNotes || "",
      ipAddress: getClientIp(req),
    });

    await newOrder.save();

    console.log(
      `📦 [YANGI BUYURTMA]: #${newOrder.orderId} | User: ${newOrder.userEmail || "guest"} | $${newOrder.totalPriceUsd} / ${newOrder.totalPriceUzs} so'm`,
    );

    return res.status(201).json({
      success: true,
      message: "Buyurtma muvaffaqiyatli saqlandi!",
      order: newOrder,
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

router.put("/:id/status", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(
        process.env.MONGO_URL ||
          "mongodb+srv://eurotexkids7775_db_user:yro1XElCJariRjzw@eurotexkidsuz.ntrgl4x.mongodb.net/?appName=Eurotexkidsuz",
        { serverSelectionTimeoutMS: 10000 },
      );
    }
    const { id } = req.params;
    const { statusStep, status, adminNotes } = req.body;
    const stepNum = Number(statusStep);

    if (isNaN(stepNum) || stepNum < 0 || stepNum > 4) {
      return res
        .status(400)
        .json({ success: false, message: "Noto'g'ri status raqami (0-4)" });
    }

    const stepInfo = ORDER_STATUS_STEPS[stepNum];

    const queryConditions = [{ orderId: id }];
    if (mongoose.isValidObjectId(id)) queryConditions.push({ _id: id });

    const updated = await Order.findOneAndUpdate(
      { $or: queryConditions },
      {
        statusStep: stepNum,
        status: status || stepInfo.icon + " " + stepInfo.label,
        ...(adminNotes !== undefined ? { adminNotes } : {}),
      },
      { new: true },
    );

    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Buyurtma topilmadi" });
    }

    console.log(
      `🔄 [STATUS YANGILANDI]: #${updated.orderId} -> ${updated.status}`,
    );

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

router.put("/:id", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(
        process.env.MONGO_URL ||
          "mongodb+srv://eurotexkids7775_db_user:yro1XElCJariRjzw@eurotexkidsuz.ntrgl4x.mongodb.net/?appName=Eurotexkidsuz",
        { serverSelectionTimeoutMS: 10000 },
      );
    }
    const { id } = req.params;
    const queryConditions = [{ orderId: id }];
    if (mongoose.isValidObjectId(id)) queryConditions.push({ _id: id });

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

    const updated = await Order.findOneAndUpdate(
      { $or: queryConditions },
      { $set: updateData },
      { new: true },
    );

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

router.delete("/:id", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(
        process.env.MONGO_URL ||
          "mongodb+srv://eurotexkids7775_db_user:yro1XElCJariRjzw@eurotexkidsuz.ntrgl4x.mongodb.net/?appName=Eurotexkidsuz",
        { serverSelectionTimeoutMS: 10000 },
      );
    }
    const { id } = req.params;
    const queryConditions = [{ orderId: id }];
    if (mongoose.isValidObjectId(id)) queryConditions.push({ _id: id });

    const deleted = await Order.deleteOne({ $or: queryConditions });

    return res.status(200).json({
      success: true,
      message:
        deleted.deletedCount > 0 ? "Buyurtma o'chirildi" : "Buyurtma topilmadi",
    });
  } catch (error) {
    console.error("DELETE /orders/:id xatosi:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

router.get("/stats/summary", async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(
        process.env.MONGO_URL ||
          "mongodb+srv://eurotexkids7775_db_user:yro1XElCJariRjzw@eurotexkidsuz.ntrgl4x.mongodb.net/?appName=Eurotexkidsuz",
        { serverSelectionTimeoutMS: 10000 },
      );
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
