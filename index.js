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
const MONGO_URI =
  process.env.MONGO_URL ||
  "mongodb+srv://eurotexkids7775_db_user:yro1XElCJariRjzw@eurotexkidsuz.ntrgl4x.mongodb.net/?appName=Eurotexkidsuz";

async function connectToDB() {
  try {
    await connect(MONGO_URI, { serverSelectionTimeoutMS: 10000 });
    console.log("✅ MongoDB ulandi!");
  } catch (error) {
    console.error("❌ MongoDB xatosi:", error.message);
  }
}
connectToDB();

// Routes
app.get("/favicon.ico", (req, res) => res.status(204).end());

const { users } = require("./routes/userRoute");
app.use("/users", users);

const productRouter = require("./routes/productRoute");
app.use("/products", productRouter);

// Express SPA Fallback for /savat, /saralanganlar, /checkout, etc.
const path = require("path");
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server: http://localhost:${PORT}`);
});
