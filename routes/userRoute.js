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
  facebookAuth,
  facebookCallback,
  appleAuth,
  appleCallback,
  githubAuth,
  githubCallback,
  guestAuth,
  validateEmail,
  qrGenerate,
  qrStatus,
  qrAuthorize,
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

// QR Authentication endpoints
router.post("/qr-generate", qrGenerate);
router.get("/qr-status", qrStatus);
router.post("/qr-authorize", qrAuthorize);

// Google OAuth
router.get("/auth/google", googleAuth);
router.get("/auth/google/callback", googleCallback);

// Facebook OAuth
router.get("/auth/facebook", facebookAuth);
router.get("/auth/facebook/callback", facebookCallback);

// Apple OAuth
router.get("/auth/apple", appleAuth);
router.post("/auth/apple/callback", appleCallback);

// GitHub OAuth
router.get("/auth/github", githubAuth);
router.get("/auth/github/callback", githubCallback);

// Guest Authentication
router.get("/auth/guest", guestAuth);

module.exports = { users: router };
