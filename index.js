const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");           // #1 — HTTP Security headers
const rateLimit = require("express-rate-limit"); // #2 — Rate limiting
require("dotenv").config();
const app = express();

// ── #1 HELMET — XSS, Clickjacking, MIME sniffing himoyasi ─────────────────────
app.use(
  helmet({
    contentSecurityPolicy: false, // SPA uchun o'chirildi (inline script bor)
    crossOriginEmbedderPolicy: false,
  })
);

// ── #5 CORS — Faqat eurotexkids.uz ga ruxsat ──────────────────────────────────
const allowedOrigins = [
  "https://eurotexkids.uz",
  "https://www.eurotexkids.uz",
  ...(process.env.NODE_ENV !== "production" ? ["http://localhost:5000", "http://localhost:3000"] : []),
];
app.use(cors({
  origin: (origin, cb) => {
    // origin yo'q (curl/postman/server-side) yoki ruxsat berilgan domendan
    if (!origin || allowedOrigins.includes(origin)) return cb(null, true);
    return cb(new Error("CORS: Ruxsat berilmagan domen: " + origin));
  },
  credentials: true,
}));

// ── #3 BODY SIZE — 100mb → 2mb (DoS himoyasi) ─────────────────────────────────
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ limit: "2mb", extended: true }));


// Database
const MONGO_URI = process.env.MONGO_URL || "";

async function connectToDB() {
  if (!MONGO_URI) {
    console.warn(
      "⚠️ MONGO_URL .env faylida sozlanmagan! Mahalliy JSON fayllar ishlatiladi.",
    );
    return;
  }
  try {
    await connect(MONGO_URI, {
      serverSelectionTimeoutMS: 3000,
      connectTimeoutMS: 3000,
      socketTimeoutMS: 5000,
    });
    console.log("✅ MongoDB ulandi!");
  } catch (error) {
    console.error("❌ MongoDB xatosi:", error.message);
    console.warn("⚠️ Lokal JSON fayllariga fallback qilindi.");
  }
}
connectToDB();

// Routes
app.get("/favicon.ico", (req, res) => res.status(204).end());

const { users } = require("./routes/userRoute");
app.use("/users", users);

const productRouter = require("./routes/productRoute");
app.use("/products", productRouter);

const orderRouter = require("./routes/orderRoute");
app.use("/orders", orderRouter);

const apiRouter = require("./routes/apiRoute");
app.use("/api", apiRouter);

// Express SPA Fallback for /savat, /saralanganlar, /checkout, /products, etc.
const path = require("path");
app.use((req, res, next) => {
  if (
    req.method === "GET" &&
    !req.path.startsWith("/users") &&
    !req.path.startsWith("/products") &&
    !req.path.startsWith("/orders") &&
    !req.path.includes(".")
  ) {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    return res.sendFile(path.join(__dirname, "public", "index.html"));
  }
  next();
});

// ── #14 Sensitive fayllarni himoyalash ────────────────────────────────────────
app.use((req, res, next) => {
  const blockedPaths = [".env", "telegram_config.json", "package.json", "package-lock.json"];
  if (blockedPaths.some((f) => req.path.includes(f))) {
    return res.status(403).send("Forbidden");
  }
  next();
});

app.use(express.static("public"));

// SPA Fallback
app.use((req, res, next) => {
  if (
    req.method === "GET" &&
    !req.path.startsWith("/users") &&
    !req.path.startsWith("/products") &&
    !req.path.startsWith("/orders") &&
    !req.path.startsWith("/api") &&
    !req.path.includes(".")
  ) {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    return res.sendFile(path.join(__dirname, "public", "index.html"));
  }
  next();
});

// ── #10 GLOBAL ERROR HANDLER — ichki xatolar tashqariga chiqmasin ─────────────
app.use((err, req, res, next) => {
  console.error("Global Express Error:", err.stack || err.message); // faqat server log
  if (res.headersSent) return next(err);
  return res.status(500).json({ success: false, message: "Server xatosi yuz berdi." });
});

// Default SPA fallback
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server: http://localhost:${PORT}`);
});
