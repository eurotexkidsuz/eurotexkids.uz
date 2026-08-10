const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// GET /orders - Fetch all orders from MongoDB Atlas
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find({}).sort({ createdAt: -1 });
    return res.status(200).json(orders);
  } catch (error) {
    console.error("GET /orders xatosi:", error);
    return res.status(500).json({ message: "Server xatosi", error: error.message });
  }
});

// POST /orders - Create new customer order in MongoDB Atlas
router.post("/", async (req, res) => {
  try {
    const { orderId, recipient, phone, address, region, district, items, total, statusStep, status, date } = req.body;

    if (!orderId || !items || items.length === 0) {
      return res.status(400).json({ message: "Buyurtma ma'lumotlari yetarli emas!" });
    }

    const newOrder = new Order({
      orderId: orderId || `EUR-${Math.floor(100000 + Math.random() * 900000)}`,
      recipient: recipient || "Mijoz",
      phone: phone || "",
      address: address || "",
      region: region || "",
      district: district || "",
      items: items || [],
      total: total || 0,
      statusStep: statusStep || 1,
      status: status || "Qabul qilindi 🟡",
      date: date || new Date().toLocaleDateString("uz-UZ"),
    });

    await newOrder.save();
    console.log(`📦 [YANGI BUYURTMA SAQLANDI]: #${newOrder.orderId} - Summa: ${newOrder.total}`);

    return res.status(201).json({ message: "Buyurtma saqlandi!", order: newOrder });
  } catch (error) {
    console.error("POST /orders xatosi:", error);
    return res.status(500).json({ message: "Server xatosi", error: error.message });
  }
});

// PUT /orders/:id/status - Update order status step
router.put("/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { statusStep, status } = req.body;

    const updated = await Order.findOneAndUpdate(
      { orderId: id },
      { statusStep, status },
      { new: true }
    );

    return res.status(200).json({ message: "Status yangilandi!", order: updated });
  } catch (error) {
    console.error("PUT /orders/:id/status xatosi:", error);
    return res.status(500).json({ message: "Server xatosi", error: error.message });
  }
});

module.exports = router;
