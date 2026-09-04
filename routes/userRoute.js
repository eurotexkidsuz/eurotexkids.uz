const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit"); // #2 Rate Limiting
const {
  sendCode,
  verifyCode,
  getProfile,
  removeSession,
  checkRememberToken,
  googleAuth,
  googleCallback,
  googleOneTap,
  guestAuth,
  validateEmail,
  deleteAccount,
  getSlides,
  getSlidesStream,
  saveSlideImage,
} = require("../controllers/userController");

// ── #2 RATE LIMITING ──────────────────────────────────────────────────────────
// Kod yuborish: 15 daqiqada max 5 urinish (spam va bot oldini olish)
const sendCodeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "⏳ Juda ko'p urinish! 15 daqiqadan so'ng qayta urining." },
});

// Kodni tasdiqlash: 10 daqiqada max 10 urinish
const verifyLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "⏳ Juda ko'p noto'g'ri urinish! 10 daqiqadan so'ng qayta urining." },
});

// Umumiy API: 1 daqiqada max 30 so'rov
const generalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  message: { success: false, message: "Juda ko'p so'rov. Biroz kuting." },
});

router.post("/send-code", sendCodeLimiter, sendCode);
router.post("/verify-code", verifyLimiter, verifyCode);
router.get("/profile", generalLimiter, getProfile);
router.post("/remove-session", generalLimiter, removeSession);
router.post("/check-token", generalLimiter, checkRememberToken);
router.post("/validate-email", sendCodeLimiter, validateEmail);
router.post("/delete-account", generalLimiter, deleteAccount);

// Hero Slides API
router.get("/slides", getSlides);
router.get("/slides/stream", getSlidesStream);
router.post("/slides/upload", saveSlideImage);

// Google OAuth
router.get("/auth/google", googleAuth);
router.get("/auth/google/callback", googleCallback);
router.post("/auth/google-one-tap", generalLimiter, googleOneTap);

// Guest Authentication
router.get("/auth/guest", generalLimiter, guestAuth);

module.exports = { users: router };

