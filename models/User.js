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
    resendCount: { type: Number, default: 0 },
    failedAttempts: { type: Number, default: 0 },
    blockCount: { type: Number, default: 0 },
    blockedUntil: { type: Date, default: null },
    rememberToken: { type: String, default: null },
    isGuest: { type: Boolean, default: false },
    magicToken: { type: String, default: null },
    magicTokenExpiry: { type: Date, default: null },
    role: { type: String, default: "user" },
    sessions: [sessionSchema],
    loginLogs: [loginLogSchema],
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
