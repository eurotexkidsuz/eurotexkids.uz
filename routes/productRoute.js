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

const FALLBACK_MONGO_URL = process.env.MONGO_URL;

async function ensureDbConnected() {
  if (mongoose.connection.readyState === 1) return;
  if (!FALLBACK_MONGO_URL) return;
  try {
    await mongoose.connect(FALLBACK_MONGO_URL, {
      serverSelectionTimeoutMS: 10000,
    });
  } catch (e) {
    console.error("MongoDB Connection Error in products route:", e.message);
  }
}

// Get all products (merged from MongoDB and local file)
router.get("/", async (req, res) => {
  const fileProds = readLocalProducts();
  try {
    if (mongoose.connection && mongoose.connection.readyState === 1) {
      const dbProds = await Promise.race([
        Product.find().sort({ createdAt: -1 }),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 1200))
      ]);
      if (Array.isArray(dbProds) && dbProds.length > 0) {
        const map = new Map();
        fileProds.forEach((p) => map.set(String(p.id || p.customId), p));
        dbProds.forEach((p) => {
          const obj = p.toObject ? p.toObject() : p;
          map.set(String(obj.customId || obj.id || obj._id), obj);
        });
        const merged = Array.from(map.values());
        return res.json({ success: true, products: merged });
      }
    }
  } catch (err) {
    // Quiet fallback to local products on DB timeout or offline state
  }
  return res.json({ success: true, products: fileProds });
});

// Add new product
router.post("/", async (req, res) => {
  try {
    await ensureDbConnected();
    const pData = req.body;
    if (!pData.customId) pData.customId = pData.id || "prod_" + Date.now();
    if (!pData.id) pData.id = pData.customId;

    // 1. Save to MongoDB Atlas FIRST (Primary Database)
    let dbResult = null;
    try {
      dbResult = await Product.findOneAndUpdate(
        { customId: String(pData.customId) },
        { $set: pData },
        { upsert: true, new: true },
      );
    } catch (dbErr) {
      console.error("MongoDB Save Error in POST /products:", dbErr);
    }

    // 2. Local file update (Best-effort for local environment)
    try {
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
    } catch (fileErr) {}

    return res.json({ success: true, product: dbResult || pData });
  } catch (err) {
    console.error("Error in POST /products:", err);
    return res.json({ success: true, product: req.body, message: err.message });
  }
});

// Update product
router.put("/:id", async (req, res) => {
  try {
    await ensureDbConnected();
    const id = String(req.params.id);
    const pData = req.body;

    // 1. Save to MongoDB Atlas FIRST (Primary Database)
    const queryConditions = [{ customId: id }, { id: id }];
    if (mongoose.isValidObjectId(id)) {
      queryConditions.push({ _id: id });
    }

    let dbResult = null;
    try {
      dbResult = await Product.findOneAndUpdate(
        { $or: queryConditions },
        { $set: pData },
        { upsert: true, new: true },
      );
    } catch (dbErr) {
      console.error("MongoDB Save Error in PUT /products:", dbErr);
    }

    // 2. Local file update (Best-effort for local environment)
    try {
      const fileProds = readLocalProducts();
      const existingIdx = fileProds.findIndex(
        (p) => String(p.id || p.customId) === id,
      );
      if (existingIdx >= 0) {
        fileProds[existingIdx] = { ...fileProds[existingIdx], ...pData };
        writeLocalProducts(fileProds);
      }
    } catch (fileErr) {}

    return res.json({ success: true, product: dbResult || pData });
  } catch (err) {
    return res.json({ success: true, error: err.message });
  }
});

// Delete product
router.delete("/:id", async (req, res) => {
  try {
    await ensureDbConnected();
    const id = String(req.params.id);

    // 1. Delete from MongoDB Atlas FIRST (Primary Database)
    const queryConditions = [{ customId: id }, { id: id }];
    if (mongoose.isValidObjectId(id)) {
      queryConditions.push({ _id: id });
    }

    try {
      await Product.deleteOne({ $or: queryConditions });
    } catch (dbErr) {
      console.error("MongoDB Delete Error in DELETE /products:", dbErr);
    }

    // 2. Local file update (Best-effort for local environment)
    try {
      const fileProds = readLocalProducts();
      const filtered = fileProds.filter(
        (p) => String(p.id || p.customId) !== id,
      );
      writeLocalProducts(filtered);
    } catch (fileErr) {}

    return res.json({ success: true, message: "Product deleted" });
  } catch (err) {
    return res.json({ success: true, error: err.message });
  }
});

module.exports = router;
