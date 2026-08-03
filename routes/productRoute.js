const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const Product = require("../models/Product");

const PRODUCTS_FILE = path.join(__dirname, "../products_db.json");

function readLocalProducts() {
  try {
    if (fs.existsSync(PRODUCTS_FILE)) {
      const data = fs.readFileSync(PRODUCTS_FILE, "utf8");
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Error reading products_db.json:", e);
  }
  return [];
}

function writeLocalProducts(products) {
  try {
    fs.writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), "utf8");
  } catch (e) {
    console.error("Error writing products_db.json:", e);
  }
}

const DEFAULT_MONGO_URL =
  process.env.MONGO_URL ||
  "mongodb+srv://eurotexkids7775_db_user:yro1XElCJariRjzw@eurotexkidsuz.ntrgl4x.mongodb.net/?appName=Eurotexkidsuz";

async function ensureDbConnected() {
  if (mongoose.connection.readyState === 1) return;
  try {
    await mongoose.connect(DEFAULT_MONGO_URL, {
      serverSelectionTimeoutMS: 10000,
    });
  } catch (e) {
    console.error("MongoDB Connection Error:", e);
  }
}

// Get all products (merged from MongoDB and local file)
router.get("/", async (req, res) => {
  try {
    await ensureDbConnected();
    let dbProds = [];
    try {
      dbProds = await Product.find().sort({ createdAt: -1 });
    } catch (dbErr) {
      console.error("Product.find Error:", dbErr);
    }
    const fileProds = readLocalProducts();

    const map = new Map();
    fileProds.forEach((p) => map.set(String(p.id || p.customId), p));
    dbProds.forEach((p) => {
      const obj = p.toObject ? p.toObject() : p;
      map.set(String(obj.customId || obj.id || obj._id), obj);
    });

    const merged = Array.from(map.values());
    return res.json({ success: true, products: merged });
  } catch (err) {
    const fileProds = readLocalProducts();
    return res.json({ success: true, products: fileProds });
  }
});

// Add new product
router.post("/", async (req, res) => {
  try {
    await ensureDbConnected();
    const pData = req.body;
    if (!pData.customId) pData.customId = pData.id || "prod_" + Date.now();
    if (!pData.id) pData.id = pData.customId;

    // Save to local file
    const fileProds = readLocalProducts();
    const existingIdx = fileProds.findIndex(
      (p) => String(p.id || p.customId) === String(pData.id),
    );
    if (existingIdx >= 0) {
      fileProds[existingIdx] = { ...fileProds[existingIdx], ...pData };
    } else {
      fileProds.unshift(pData);
    }
    writeLocalProducts(fileProds);

    // Save to MongoDB
    await Product.findOneAndUpdate(
      { customId: String(pData.customId) },
      { $set: pData },
      { upsert: true, new: true },
    );

    return res.json({ success: true, product: pData });
  } catch (err) {
    console.error("Error in POST /products:", err);
    return res.json({ success: true, product: req.body, message: err.message });
  }
});

// Update product
router.put("/:id", async (req, res) => {
  try {
    await ensureDbConnected();
    const id = req.params.id;
    const pData = req.body;

    // Update local file
    const fileProds = readLocalProducts();
    const existingIdx = fileProds.findIndex(
      (p) => String(p.id || p.customId) === String(id),
    );
    if (existingIdx >= 0) {
      fileProds[existingIdx] = { ...fileProds[existingIdx], ...pData };
      writeLocalProducts(fileProds);
    }

    await Product.findOneAndUpdate(
      {
        $or: [
          { customId: id },
          { id: id },
          { _id: mongoose.isValidObjectId(id) ? id : null },
        ],
      },
      { $set: pData },
      { new: true },
    );

    return res.json({ success: true });
  } catch (err) {
    return res.json({ success: true, error: err.message });
  }
});

// Delete product
router.delete("/:id", async (req, res) => {
  try {
    await ensureDbConnected();
    const id = req.params.id;
    const fileProds = readLocalProducts();
    const filtered = fileProds.filter(
      (p) => String(p.id || p.customId) !== String(id),
    );
    writeLocalProducts(filtered);

    await Product.deleteOne({
      $or: [
        { customId: id },
        { id: id },
        { _id: mongoose.isValidObjectId(id) ? id : null },
      ],
    });

    return res.json({ success: true, message: "Product deleted" });
  } catch (err) {
    return res.json({ success: true, error: err.message });
  }
});

module.exports = router;
