const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const Product = require("../models/Product");
const { requireAdmin } = require("../middleware/adminAuth");

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

// 💾 #1 ATOMAR FAYL YOZISH: products_db.json buzilishidan 100% himoya
function writeLocalProducts(products) {
  const tmpPath = PRODUCTS_FILE + ".tmp";
  try {
    fs.writeFileSync(tmpPath, JSON.stringify(products, null, 2), "utf8");
    fs.renameSync(tmpPath, PRODUCTS_FILE);
  } catch (e) {
    console.error("Error writing products_db.json:", e);
    try { fs.unlinkSync(tmpPath); } catch (_) {}
  }
}

function extractAndSaveBase64Images(pData) {
  const uploadDir = path.join(__dirname, "../public/images/uploads");
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
  const prodKey = String(pData.customId || pData.id || ("prod_" + Date.now())).replace(/[^a-zA-Z0-9_-]/g, "_");

  if (pData.image && typeof pData.image === "string" && pData.image.startsWith("data:image")) {
    try {
      const parts = pData.image.split(",");
      const mimeMatch = parts[0].match(/:(.*?);/);
      const mime = mimeMatch ? mimeMatch[1] : "image/jpeg";
      const ext = mime.includes("png") ? "png" : (mime.includes("webp") ? "webp" : "jpg");
      const filename = `${prodKey}_main_${Date.now()}.${ext}`;
      fs.writeFileSync(path.join(uploadDir, filename), Buffer.from(parts[1], "base64"));
      pData.image = `/images/uploads/${filename}`;
    } catch (e) {
      console.error("Error saving product main image:", e.message);
    }
  }

  if (Array.isArray(pData.images)) {
    pData.images = pData.images.map((imgStr, iIdx) => {
      if (typeof imgStr === "string" && imgStr.startsWith("data:image")) {
        try {
          const parts = imgStr.split(",");
          const mimeMatch = parts[0].match(/:(.*?);/);
          const mime = mimeMatch ? mimeMatch[1] : "image/jpeg";
          const ext = mime.includes("png") ? "png" : (mime.includes("webp") ? "webp" : "jpg");
          const filename = `${prodKey}_gal_${iIdx}_${Date.now()}.${ext}`;
          fs.writeFileSync(path.join(uploadDir, filename), Buffer.from(parts[1], "base64"));
          return `/images/uploads/${filename}`;
        } catch (e) {
          return imgStr;
        }
      }
      return imgStr;
    });
  }
  return pData;
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
    await ensureDbConnected();
    if (mongoose.connection && mongoose.connection.readyState === 1) {
      const dbProds = await Product.find().sort({ createdAt: -1 }).maxTimeMS(8000);
      if (Array.isArray(dbProds) && dbProds.length > 0) {
        const map = new Map();
        fileProds.forEach((p) => map.set(String(p.id || p.customId), p));
        dbProds.forEach((p) => {
          const obj = p.toObject ? p.toObject() : p;
          const pUsd = (obj.pachkaPriceUsd && obj.pachkaPriceUsd > 0)
            ? obj.pachkaPriceUsd
            : (obj.priceUsd && obj.priceUsd > 0)
            ? obj.priceUsd
            : (obj.price && obj.price > 5000)
            ? Math.round(obj.price / 12650)
            : 45;

          obj.pachkaPriceUsd = pUsd;
          obj.priceUsd = pUsd;
          obj.price = (obj.price && obj.price > 5000) ? obj.price : pUsd * 12650;

          // Normalize oldPrice and discount
          let rawOld = Number(obj.oldPrice);
          if (!Number.isFinite(rawOld) || rawOld > 50000000 || rawOld < 0) {
            rawOld = 0;
          }
          if (rawOld > 0 && rawOld <= 5000) {
            rawOld = rawOld * 12650;
          }
          if (rawOld <= obj.price) {
            rawOld = Math.round(obj.price * 1.25);
          }
          obj.oldPrice = rawOld;

          // Discount percent is strictly 1% to 99% (never 100%!)
          if (obj.discountPercent && obj.discountPercent > 0 && obj.discountPercent < 100) {
            obj.discountPercent = Math.min(99, Math.max(1, Math.round(obj.discountPercent)));
          } else if (obj.oldPrice > obj.price && obj.price > 0) {
            const calculatedDisc = Math.round(((obj.oldPrice - obj.price) / obj.oldPrice) * 100);
            obj.discountPercent = Math.min(99, Math.max(1, calculatedDisc));
          } else {
            obj.discountPercent = 0;
          }

          map.set(String(obj.customId || obj.id || obj._id), obj);
        });
        const merged = Array.from(map.values());
        return res.json({ success: true, products: merged });
      }
    }
  } catch (err) {
    console.warn("MongoDB GET /products notice:", err.message);
  }
  return res.json({ success: true, products: fileProds });
});

// Get single product by id, customId or _id
router.get("/:id", async (req, res) => {
  try {
    const id = String(req.params.id);
    await ensureDbConnected();

    if (mongoose.connection && mongoose.connection.readyState === 1) {
      const queryConditions = [{ customId: id }, { id: id }];
      if (mongoose.isValidObjectId(id)) {
        queryConditions.push({ _id: id });
      }
      try {
        const dbProd = await Product.findOne({ $or: queryConditions });
        if (dbProd) {
          return res.json({ success: true, product: dbProd });
        }
      } catch (e) {}
    }

    const fileProds = readLocalProducts();
    const found = fileProds.find((p) => String(p.id || p.customId || p._id) === id);
    if (found) {
      return res.json({ success: true, product: found });
    }

    return res.status(404).json({ success: false, message: "Mahsulot topilmadi" });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

// Add new product (Faqat Admin)
router.post("/", requireAdmin, async (req, res) => {
  try {
    await ensureDbConnected();
    const pData = { ...req.body };
    if (!pData.customId) pData.customId = pData.id || "prod_" + Date.now();
    if (!pData.id) pData.id = pData.customId;
    if (pData.pachkaPriceUsd && pData.pachkaPriceUsd > 0) {
      pData.priceUsd = pData.pachkaPriceUsd;
    }
    delete pData._id;
    extractAndSaveBase64Images(pData);

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
    return res.status(500).json({ success: false, message: "Mahsulot qo'shishda xatolik: " + err.message });
  }
});

// Update product (Faqat Admin)
router.put("/:id", requireAdmin, async (req, res) => {
  try {
    await ensureDbConnected();
    const id = String(req.params.id);
    const pData = { ...req.body };
    if (!pData.customId) pData.customId = id;
    if (!pData.id) pData.id = id;
    if (pData.pachkaPriceUsd && pData.pachkaPriceUsd > 0) {
      pData.priceUsd = pData.pachkaPriceUsd;
    }
    delete pData._id;
    extractAndSaveBase64Images(pData);

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
    return res.status(500).json({ success: false, message: "Mahsulotni yangilashda xatolik: " + err.message });
  }
});

// Delete product (Faqat Admin)
router.delete("/:id", requireAdmin, async (req, res) => {
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
    return res.status(500).json({ success: false, message: "Mahsulotni o'chirishda xatolik: " + err.message });
  }
});

module.exports = router;
