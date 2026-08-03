const express = require("express");
const router = express.Router();
const {
  sendCode,
  verifyCode,
  getProfile,
  removeSession,
  checkRememberToken,
  googleAuth,
  googleCallback,
  guestAuth,
  validateEmail,
  deleteAccount,
  getSlides,
  getSlidesStream,
  saveSlideImage,
} = require("../controllers/userController");

router.post("/send-code", sendCode);
router.post("/verify-code", verifyCode);
router.get("/profile", getProfile);
router.post("/remove-session", removeSession);
router.post("/check-token", checkRememberToken);
router.post("/validate-email", validateEmail);
router.post("/delete-account", deleteAccount);

// Hero Slides API
router.get("/slides", getSlides);
router.get("/slides/stream", getSlidesStream);
router.post("/slides/upload", saveSlideImage);

// Google OAuth
router.get("/auth/google", googleAuth);
router.get("/auth/google/callback", googleCallback);

// Guest Authentication
router.get("/auth/guest", guestAuth);

module.exports = { users: router };
