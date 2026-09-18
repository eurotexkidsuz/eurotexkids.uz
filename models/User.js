const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  ip: String,
  device: String,
  browser: String,
  os: String,
  createdAt: { type: Date, default: Date.now },
  lastActive: { type: Date, default: Date.now },
});

const loginLogSchema = new mongoose.Schema({
  ip: String,
  device: String,
  browser: String,
  os: String,
  status: {
    type: String,
    enum: ["success", "failed", "blocked"],
    default: "success",
  },
  createdAt: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    code: { type: String },
    codeExpiry: { type: Date, default: null },
    resendCount: { type: Number, default: 0 },
    failedAttempts: { type: Number, default: 0 },
    blockCount: { type: Number, default: 0 },
    blockedUntil: { type: Date, default: null },
    rememberToken: { type: String, default: null },
    isGuest: { type: Boolean, default: false },
    magicToken: { type: String, default: null },
    magicTokenExpiry: { type: Date, default: null },
    role: { type: String, default: "user" },
    name: { type: String, default: "" },
    phone: { type: String, default: "" },
    extraPhone: { type: String, default: "" },
    telegram: { type: String, default: "" },
    city: { type: String, default: "" },
    address: { type: String, default: "" },
    birthDate: { type: String, default: "" },
    suitSize: { type: String, default: "" },
    style: { type: String, default: "" },
    sessions: [sessionSchema],
    loginLogs: [loginLogSchema],
  },
  { timestamps: true, strict: false },
);

// Unbounded Array Bloat himoyasi
userSchema.pre("save", function (next) {
  if (Array.isArray(this.sessions) && this.sessions.length > 20) {
    this.sessions = this.sessions.slice(-20);
  }
  if (Array.isArray(this.loginLogs) && this.loginLogs.length > 50) {
    this.loginLogs = this.loginLogs.slice(-50);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
