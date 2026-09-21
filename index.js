const dns = require("dns");
try {
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch (e) {}
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");           // #1 — HTTP Security headers
const rateLimit = require("express-rate-limit"); // #2 — Rate limiting
const compression = require("compression");
require("dotenv").config();
const app = express();
app.set("trust proxy", 1); // #2 Reverse proxy (Nginx, Cloudflare) ortida mijoz IP sini to'g'ri olish

// ⚡ #6 High-Efficiency Compression (Brotli/Gzip) with 1KB threshold
app.use(
  compression({
    threshold: 1024,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) return false;
      return compression.filter(req, res);
    },
  })
);

// ── #1 HELMET — XSS, Clickjacking, MIME sniffing himoyasi ─────────────────────
app.use(
  helmet({
    contentSecurityPolicy: false, // SPA uchun o'chirildi (inline script bor)
    crossOriginEmbedderPolicy: false,
  })
);

// 🛡️ #1 Explicit Security Headers (Clickjacking, MIME Sniffing, Referrer Policy)
app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  next();
});

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

// 🔒 #2 CSRF HIMOYASI: Begona saytlardan kelgan zararli POST/PUT/DELETE so'rovlarni bloklash
app.use((req, res, next) => {
  if (["POST", "PUT", "PATCH", "DELETE"].includes(req.method)) {
    const secFetchSite = req.headers["sec-fetch-site"];
    if (secFetchSite === "cross-site") {
      return res.status(403).json({ success: false, message: "CSRF: Cross-site so'rov rad etildi." });
    }
  }
  next();
});

// ── #3 BODY SIZE — 100mb → 2mb (DoS himoyasi) ─────────────────────────────────
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ limit: "2mb", extended: true }));

// 🛡️ #4 HPP (HTTP Parameter Pollution) query sanitizer
app.use((req, res, next) => {
  if (req.query && typeof req.query === "object") {
    for (const key of Object.keys(req.query)) {
      if (Array.isArray(req.query[key])) {
        req.query[key] = req.query[key][req.query[key].length - 1];
      }
    }
  }
  next();
});

// 🛡️ #7 NoSQL Injection himoyasi ($gt, $ne, $where operatorlarini tozalash)
function sanitizeNoSql(obj) {
  if (!obj || typeof obj !== "object") return;
  for (const key of Object.keys(obj)) {
    if (key.startsWith("$") || key.includes(".")) {
      delete obj[key];
    } else if (typeof obj[key] === "object") {
      sanitizeNoSql(obj[key]);
    }
  }
}
app.use((req, res, next) => {
  if (req.body) sanitizeNoSql(req.body);
  if (req.params) sanitizeNoSql(req.params);
  next();
});

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
    await mongoose.connect(MONGO_URI, {
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

// ── 🌐 EXPRESS SPA ZERO-LATENCY HYDRATION (0ms Wait / No Flicker) ─────────────
const fs = require("fs");
const path = require("path");

let cachedHydratedHtml = "";
let lastHydratedAt = 0;

// 🌐 #2 — Ijtimoiy tarmoq botlari uchun User-Agent tekshiruvi
function isSocialBot(req) {
  const ua = (req.headers["user-agent"] || "").toLowerCase();
  return (
    ua.includes("telegrambot") ||
    ua.includes("facebookexternalhit") ||
    ua.includes("whatsapp") ||
    ua.includes("twitterbot") ||
    ua.includes("linkedinbot") ||
    ua.includes("slackbot") ||
    ua.includes("discordbot") ||
    ua.includes("vkshare") ||
    ua.includes("applebot")
  );
}

// 🌐 #2 — OG meta taglarini mahsulot ma'lumotlariga almashtirish (SSR)
function injectProductOgTags(html, product) {
  const safeTitle = (product.title_uz || product.title || "Eurotex Kiyim").replace(/"/g, '&quot;');
  const safeDesc  = `Narxi: $${product.priceUsd || product.price || ""} (${product.priceSom ? product.priceSom.toLocaleString() + " so'm" : ""}) | ${product.category_uz || "Erkaklar kiyimi"} | Butun O'zbekiston bo'yicha yetkazib berish | eurotexkids.uz`.replace(/"/g, '&quot;');
  const img       = product.image || product.img || "https://eurotexkids.uz/images/eurotex-logo.png";
  const url       = `https://eurotexkids.uz/product/${encodeURIComponent(product.id)}`;
  const price     = product.priceUsd || product.price || 0;

  const ogBlock = `
    <!-- 🌐 Dynamic SSR Open Graph Tags for Telegram, WhatsApp, Facebook -->
    <meta property="og:site_name" content="Eurotexkids.uz" />
    <meta property="og:title" content="${safeTitle} — Eurotex" />
    <meta property="og:description" content="${safeDesc}" />
    <meta property="og:image" content="${img}" />
    <meta property="og:image:secure_url" content="${img}" />
    <meta property="og:image:alt" content="${safeTitle}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="product" />
    <meta property="product:price:amount" content="${price}" />
    <meta property="product:price:currency" content="USD" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeTitle} — Eurotex" />
    <meta name="twitter:description" content="${safeDesc}" />
    <meta name="twitter:image" content="${img}" />`;

  // <title> va eski og: meta taglarini yangi bilan to'liq SSR almashtir
  let result = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle} — Eurotexkids.uz</title>`);
  result = result.replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, "");
  result = result.replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, "");
  return result.replace("</head>", ogBlock + "\n</head>");
}

function getHydratedHtml() {
  const now = Date.now();
  if (cachedHydratedHtml && now - lastHydratedAt < 2000) {
    return cachedHydratedHtml;
  }

  const htmlPath = path.join(__dirname, "public", "index.html");
  const prodsPath = path.join(__dirname, "products_db.json");
  const slidesPath = path.join(__dirname, "slides.json");

  try {
    let html = fs.readFileSync(htmlPath, "utf8");
    let prods = [];
    if (fs.existsSync(prodsPath)) {
      prods = JSON.parse(fs.readFileSync(prodsPath, "utf8") || "[]");
    }
    let slides = {};
    if (fs.existsSync(slidesPath)) {
      slides = JSON.parse(fs.readFileSync(slidesPath, "utf8") || "{}");
    }


    if (slides && typeof slides === "object") {
      Object.keys(slides).forEach((idx) => {
        const slideUrl = slides[idx];
        if (slideUrl) {
          html = html.replace(
            new RegExp(`(<img\\b[^>]*?src=["'])[^"']*?(["'][^>]*?id=["']heroSlideImg_${idx}["'][^>]*>)`, "i"),
            `$1${slideUrl}$2`
          );
          html = html.replace(
            new RegExp(`(<img\\b[^>]*?id=["']heroSlideImg_${idx}["'][^>]*?src=["'])[^"']*?(["'][^>]*>)`, "i"),
            `$1${slideUrl}$2`
          );
        }
      });
    }

    const injection = `
    <!-- Eurotex Instant Zero-Latency Hydration (0ms) -->
    <script id="__EUROTEX_SSR_HYDRATION__">
      window.__SERVER_PRODUCTS__ = ${JSON.stringify(prods)};
      window.__SERVER_SLIDES__ = ${JSON.stringify(slides)};
    </script>
    </head>`;

    cachedHydratedHtml = html.replace("</head>", injection);
    lastHydratedAt = now;
    return cachedHydratedHtml;
  } catch (err) {
    console.warn("SSR Hydration fallback:", err.message);
    if (fs.existsSync(htmlPath)) {
      return fs.readFileSync(htmlPath, "utf8");
    }
    return cachedHydratedHtml || "Eurotexkids";
  }
}

app.use((req, res, next) => {
  if (req.method === "GET") {
    const isHtmlRequest =
      (req.headers.accept && req.headers.accept.includes("text/html")) ||
      req.headers["sec-fetch-dest"] === "document" ||
      req.headers["sec-fetch-mode"] === "navigate";
    const hasStaticExtension = req.path.includes(".") && !req.path.endsWith(".html");
    const isBackendRoute =
      req.path.startsWith("/api") ||
      req.path.startsWith("/users") ||
      req.path.startsWith("/products") ||
      req.path.startsWith("/orders");

    if (isHtmlRequest && !hasStaticExtension && !isBackendRoute) {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.send(getHydratedHtml());
    }
  }
  next();
});

// ── 🌐 #2 OG META SSR — Ijtimoiy tarmoq botlari uchun mahsulot og: taglarini inject qilish ──
app.use((req, res, next) => {
  if (req.method !== "GET" || !isSocialBot(req)) return next();
  
  let targetProdId = null;
  if (req.path.startsWith("/product/")) {
    targetProdId = req.path.replace("/product/", "").split("/")[0].split("?")[0];
  } else if (req.query.p || req.query.prod || req.query.product) {
    targetProdId = req.query.p || req.query.prod || req.query.product;
  }

  if (!targetProdId) return next();

  const prodsPath = path.join(__dirname, "products_db.json");
  try {
    const prods = fs.existsSync(prodsPath)
      ? JSON.parse(fs.readFileSync(prodsPath, "utf8") || "[]")
      : [];
    const product = prods.find((p) => String(p.id) === String(targetProdId));
    if (!product) return next();
    let html = getHydratedHtml();
    html = injectProductOgTags(html, product);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.send(html);
  } catch (e) {
    return next();
  }
});

// ── 📦 #1 IMMUTABLE CACHE: Rasmlar, SVG va Fontlarni 1 yilga brauzerda keshlash (Trafikni 5-10x tejash) ──
app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: "365d",
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      } else if (/\.(jpg|jpeg|png|webp|avif|svg|ico|woff2|woff|ttf)$/i.test(filePath)) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        if (filePath.endsWith(".avif")) res.setHeader("Content-Type", "image/avif");
      } else if (/\.(css|js)$/i.test(filePath)) {
        res.setHeader("Cache-Control", "public, max-age=86400"); // 1 kun
      }
    },
  })
);

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
    const isBackendRoute =
      req.path.startsWith("/api") ||
      req.path.startsWith("/users") ||
      req.path.startsWith("/products") ||
      req.path.startsWith("/orders");
    if (!hasExtension && !isBackendRoute) {
      res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      res.setHeader("Expires", "0");
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.send(getHydratedHtml());
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
const server = app.listen(PORT, () => {
  console.log(`🚀 Server: http://localhost:${PORT}`);
});

// 🚦 #3 Slowloris va HTTP DoS himoyasi uchun Server Timeout sozlamalari
server.headersTimeout = 65000;   // 65 soniya (Node.js standartidan yuqori)
server.requestTimeout = 30000;   // 30 soniya
server.keepAliveTimeout = 61000; // 61 soniya
// ⚡ #10 HTTP/2 & Keep-Alive Multiplexing Tuning
server.maxRequestsPerSocket = 1000; // Bitta socket orqali 1000 tagacha parallel/ketma-ket so'rovlarga ruxsat

// 📉 #11 Memory Leak Monitoring: har 4 soatda xotirani tekshirish
setInterval(() => {
  const mem = process.memoryUsage();
  const heapMB = Math.round(mem.heapUsed / 1024 / 1024);
  const rssMB = Math.round(mem.rss / 1024 / 1024);
  if (heapMB > 450) {
    console.warn(`⚠️ [Memory Monitor] Yuqori xotira sarfi: Heap=${heapMB}MB, RSS=${rssMB}MB`);
    if (global.gc) {
      try { global.gc(); } catch (_) {}
    }
  }
}, 4 * 60 * 60 * 1000).unref();

// Graceful Shutdown (Band 5)
function gracefulShutdown(signal) {
  console.log(`\n🛑 ${signal} signali qabul qilindi. Server toza yakunlanmoqda...`);
  server.close(async () => {
    console.log("HTTP server to'xtatildi.");
    try {
      if (mongoose.connection && mongoose.connection.readyState !== 0) {
        await mongoose.connection.close();
        console.log("MongoDB ulanishi xavfsiz yopildi.");
      }
    } catch (e) {
      console.error("MongoDB yopilishida xatolik:", e.message);
    }
    process.exit(0);
  });
  setTimeout(() => {
    console.error("Majburiy to'xtatish (timeout) bajarilmoqda.");
    process.exit(1);
  }, 10000).unref();
}

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));
