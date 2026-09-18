const dns = require("dns");
try {
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch (e) {}
const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");           // #1 — HTTP Security headers
const rateLimit = require("express-rate-limit"); // #2 — Rate limiting
const compression = require("compression");
require("dotenv").config();
const app = express();
app.set("trust proxy", 1); // #2 Reverse proxy (Nginx, Cloudflare) ortida mijoz IP sini to'g'ri olish
app.use(compression()); // HTTP javoblarni Gzip orqali siqish (tezlikni 4-5x oshiradi)

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

// ── #2 RATE LIMITING — DoS va brute-force hujumlaridan himoya ────────────────
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Juda ko'p so'rov yuborildi. Iltimos, birozdan so'ng qayta urining.",
  },
});
app.use("/api", apiLimiter);


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
      serverSelectionTimeoutMS: 8000,
      connectTimeoutMS: 8000,
      socketTimeoutMS: 10000,
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

// ── Sensitive fayllar va ma'lumotlar bazasini himoyalash ─────────────────────
app.use((req, res, next) => {
  const blockedPaths = [
    ".env",
    "telegram_config.json",
    "package.json",
    "package-lock.json",
    "database.json",
    "products_db.json",
    "slides.json",
    "data/",
    ".git",
  ];
  const lowerPath = req.path.toLowerCase();
  if (blockedPaths.some((f) => lowerPath.includes(f.toLowerCase()))) {
    return res.status(403).type("text/plain").send("Forbidden");
  }
  next();
});

// ── 🌐 EXPRESS SPA NAVIGATION FALLBACK ────────────────────────────────────────
// Har qanday brauzer sahifasi ochilganda (/orders, /buyurtmalar, /products,
// /savat, /cart, /checkout, /suits, /admin, va har qanday / manzil) — doim index.html qaytariladi.
// Brauzerda xom JSON chiqib qolmaydi, to'liq Eurotex veb-sayt interfeysi ochiladi.
// Dasturiy API va AJAX (fetch/axios) so'rovlari esa o'zining JSON ma'lumotlarini oladi.
const path = require("path");

app.use((req, res, next) => {
  if (req.method === "GET") {
    const isHtmlRequest =
      (req.headers.accept && req.headers.accept.includes("text/html")) ||
      req.headers["sec-fetch-dest"] === "document" ||
      req.headers["sec-fetch-mode"] === "navigate";
    const hasStaticExtension = req.path.includes(".") && !req.path.endsWith(".html");
    const isApiEndpoint = req.path.startsWith("/api");

    if (isHtmlRequest && !hasStaticExtension && !isApiEndpoint) {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
      return res.sendFile(path.join(__dirname, "public", "index.html"));
    }
  }
  next();
});

// ── 📦 STATIC FILES & ASSETS ──────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, "public")));

// ── 🔌 REST API ROUTES (JSON DATA ENDPOINTS) ───────────────────────────────────
const { users } = require("./routes/userRoute");
app.use("/users", users);

const productRouter = require("./routes/productRoute");
app.use("/products", productRouter);

const orderRouter = require("./routes/orderRoute");
app.use("/orders", orderRouter);

const apiRouter = require("./routes/apiRoute");
app.use("/api", apiRouter);

// ── 🌐 GLOBAL SPA CATCH-ALL FOR GET ROUTES ────────────────────────────────────
app.use((req, res, next) => {
  if (req.method === "GET") {
    const hasExtension = req.path.includes(".") && !req.path.endsWith(".html");
    if (!hasExtension && !req.path.startsWith("/api") && !req.path.startsWith("/users/auth")) {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
      return res.sendFile(path.join(__dirname, "public", "index.html"));
    }
  }
  next();
});

// ── #10 GLOBAL ERROR HANDLER — ichki xatolar tashqariga chiqmasin ─────────────
app.use((err, req, res, next) => {
  console.error("Global Express Error:", err.stack || err.message); // faqat server log
  if (res.headersSent) return next(err);
  return res.status(500).json({ success: false, message: "Server xatosi yuz berdi." });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server: http://localhost:${PORT}`);
});
