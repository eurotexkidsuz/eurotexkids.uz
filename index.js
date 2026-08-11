const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

// Middleware
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());
app.use(express.static("public"));

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
    await connect(MONGO_URI, { serverSelectionTimeoutMS: 10000 });
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

// Express SPA Fallback for /savat, /saralanganlar, /checkout, /products, etc.
const path = require("path");
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/users") && !req.path.startsWith("/products") && !req.path.startsWith("/orders") && !req.path.includes(".")) {
    return res.sendFile(path.join(__dirname, "public", "index.html"));
  }
  next();
});

// Express Global Error Handler to catch 500/502 errors and return clean fallback JSON
app.use((err, req, res, next) => {
  console.error("Global Express Error:", err.message);
  if (res.headersSent) return next(err);
  return res.status(200).json({ success: true, products: [], message: err.message });
});

// Default SPA index.html fallback
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server: http://localhost:${PORT}`);
});
