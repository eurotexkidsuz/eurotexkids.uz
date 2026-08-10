const User = require("../models/UserWrapper");
const dns = require("dns");
const nodemailer = require("nodemailer");
const UAParser = require("ua-parser-js");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { OAuth2Client } = require("google-auth-library");
const path = require("path");

const JWT_SECRET = process.env.JWT_SECRET || "eurotex_secret_2026";
const ADMIN_EMAILS = ["0600quetry@gmail.com", "eurotexkids7775@gmail.com"];

function isAdminEmail(email) {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase().trim());
}

function getGoogleOAuthClient(req) {
  const clientId = (process.env.GOOGLE_CLIENT_ID || "").trim();
  const clientSecret = (process.env.GOOGLE_CLIENT_SECRET || "").trim();
  
  let redirectUri = (process.env.GOOGLE_REDIRECT_URI || "").trim();
  if (!redirectUri && req) {
    const proto = req.headers["x-forwarded-proto"] || req.protocol || "https";
    const host = req.headers["x-forwarded-host"] || req.headers.host || "eurotexkids.uz";
    redirectUri = `${proto}://${host}/users/auth/google/callback`;
  }
  if (!redirectUri) {
    redirectUri = "https://eurotexkids.uz/users/auth/google/callback";
  }

  // Tekshiruv va loglar
  if (!clientId) console.error("❌ [ERROR]: GOOGLE_CLIENT_ID topilmadi!");
  if (!clientSecret)
    console.error("❌ [ERROR]: GOOGLE_CLIENT_SECRET topilmadi yoki bo'sh!");

  console.log("🔍 [OAUTH CONFIG]:", {
    clientIdSnippet: clientId.slice(0, 10) + "...",
    secretLength: clientSecret.length,
    redirectUri: redirectUri,
  });

  return new OAuth2Client(clientId, clientSecret, redirectUri);
}
// Nodemailer transporter with Gmail App Password (eurotexkids7775@gmail.com)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "eurotexkids7775@gmail.com",
    pass: process.env.EMAIL_PASS || "dwgf rxwu qtzm fpxb",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Parse device info from request
function getDeviceInfo(req) {
  const ua = new UAParser(req.headers["user-agent"]);
  const result = ua.getResult();
  return {
    ip:
      req.headers["x-forwarded-for"] || req.socket.remoteAddress || "Noma'lum",
    device: result.device.model || result.device.type || "Desktop",
    browser:
      `${result.browser.name || "Noma'lum"} ${result.browser.version || ""}`.trim(),
    os: `${result.os.name || "Noma'lum"} ${result.os.version || ""}`.trim(),
  };
}

// Send 6-digit code via Email
async function sendVerificationCode(user, code) {
  if (transporter && user.email) {
    transporter
      .sendMail({
        from: `"Eurotexkids.uz" <${process.env.SMTP_USER || "eurotexkids7775@gmail.com"}>`,
        to: user.email,
        subject: "Eurotexkids.uz — Tasdiqlash kodi: " + code,
        text: `Eurotexkids.uz tizimiga kirish uchun tasdiqlash kodingiz: ${code}`,
        html: `<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8fafc;">
                <h2 style="color: #4f46e5;">Eurotexkids.uz Kirish Kodi</h2>
                <p>Sizning 6 xonali tasdiqlash kodingiz:</p>
                <h1 style="background: #e0e7ff; color: #4338ca; padding: 12px 24px; display: inline-block; border-radius: 8px; font-size: 32px; letter-spacing: 4px;">${code}</h1>
            </div>`,
      })
      .then((info) => console.log(`✅ [EMAIL YUBORILDI]: ${user.email}`))
      .catch((err) => console.error(`❌ [EMAIL ERROR]:`, err.message));
  }
  return "email";
}

// ─── SEND CODE ────────────────────────────────────────────────────────────────
const sendCode = async (req, res) => {
  try {
    let { email, isResend } = req.body;
    if (!email)
      return res.status(400).json({ message: "Email kiritilishi shart!" });

    email = email.toLowerCase().trim();
    if (!email.includes("@")) {
      email += "@gmail.com";
    }

    const deviceInfo = getDeviceInfo(req);
    const now = new Date();

    let user = await User.findOne({ email });

    // Check block
    if (user && user.blockedUntil && new Date(user.blockedUntil) > now) {
      const remaining = Math.ceil((new Date(user.blockedUntil) - now) / 1000);
      return res.status(429).json({
        message: "Siz blokdasiz!",
        blockedSeconds: remaining,
      });
    }

    // Generate 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    console.log("\n==================================================");
    console.log(`🔥 [EUROTEX EMAIL KODI] Email: ${email} -> KOD: ${code}`);
    console.log("==================================================\n");

    if (user) {
      const newCount = isResend ? (user.resendCount || 0) + 1 : 0;
      user.code = code;
      user.resendCount = newCount;
      if (isAdminEmail(email)) user.role = "admin";
      await user.save();
    } else {
      user = new User({
        email,
        code,
        role: isAdminEmail(email) ? "admin" : "user",
      });
      await user.save();
    }

    // Send code
    const channel = await sendVerificationCode(user, code);

    return res.status(200).json({
      message: "Tasdiqlash kodi yuborildi!",
      channel,
      code: user.code, // Returned for instant UX hint/verification
      telegramLinked: !!user.telegramChatId,
      resendCount: user.resendCount || 0,
      email, // return normalized email
    });
  } catch (error) {
    console.error("sendCode xatosi:", error);
    return res
      .status(500)
      .json({ message: "Server xatosi", error: error.message });
  }
};

// ─── VERIFY CODE ──────────────────────────────────────────────────────────────
const verifyCode = async (req, res) => {
  try {
    let { email, code, rememberMe, rememberDays } = req.body;
    if (!email || !code)
      return res
        .status(400)
        .json({ message: "Email va kod kiritilishi shart!" });

    email = email.toLowerCase().trim();
    const deviceInfo = getDeviceInfo(req);
    const now = new Date();

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, role: isAdminEmail(email) ? "admin" : "user" });
    }

    // Strict Code check - MUST match the exact code sent to email
    const inputCode = String(code || "").trim();
    const storedCode = String(user.code || "").trim();

    const isCodeValid = storedCode && inputCode === storedCode;

    if (!isCodeValid) {
      user.loginLogs.push({ ...deviceInfo, status: "failed" });
      user.failedAttempts = (user.failedAttempts || 0) + 1;

      if (user.failedAttempts >= 5) {
        user.failedAttempts = 0;
        await user.save();
        return res.status(400).json({
          message: "Noto'g'ri kod kiritildi. Qayta 'Kod yuborish'ni bosing!",
          failedAttempts: 0,
        });
      }

      await user.save();
      return res.status(400).json({
        message: `Noto'g'ri kod kiritildi! Qolgan urinishlar: ${5 - user.failedAttempts}`,
        failedAttempts: user.failedAttempts,
      });
    }

    // Code has no expiry — it stays valid until used or a new one is generated

    // Success: reset resend count, failed attempts, block count, add session & log
    user.resendCount = 0;
    user.failedAttempts = 0;
    user.blockCount = 0;
    user.blockedUntil = null;
    user.code = null;

    const session = { ...deviceInfo, createdAt: now, lastActive: now };
    user.sessions.push(session);
    user.loginLogs.push({ ...deviceInfo, status: "success" });

    // Always generate a token to authenticate session actions
    const parsedDays = parseInt(rememberDays, 10);
    const days = Math.min(
      365,
      Math.max(
        1,
        Number.isFinite(parsedDays) ? parsedDays : rememberMe ? 7 : 7,
      ),
    );
    const rememberToken = jwt.sign({ email }, JWT_SECRET, {
      expiresIn: `${days}d`,
    });
    user.rememberToken = rememberToken;

    // Admin assignment rule for admin emails
    if (isAdminEmail(user.email)) {
      user.role = "admin";
    }

    await user.save();

    return res.status(200).json({
      message:
        user.role === "admin"
          ? "👑 Admin sifatida muvaffaqiyatli kirdingiz!"
          : "Muvaffaqiyatli kirdingiz!",
      email: user.email,
      role: user.role || "user",
      telegramLinked: !!user.telegramChatId,
      rememberToken,
    });
  } catch (error) {
    console.error("verifyCode xatosi:", error);
    return res
      .status(500)
      .json({ message: "Server xatosi", error: error.message });
  }
};

// ─── GET TELEGRAM LINK (Xavfsiz — tokenli) ───────────────────────────────────
const getTelegramLink = async (req, res) => {
  try {
    let { email, sessionToken } = req.body;
    if (!email)
      return res.status(400).json({ message: "Email kiritilishi shart!" });

    email = email.toLowerCase().trim();

    // ── Foydalanuvchi haqiqatan tizimga kirganmi? ────────────────────────
    // Profil sahifasidan kelganda sessionToken tekshirilishi shart
    if (!sessionToken) {
      return res.status(401).json({ message: "Sessiya tokeni topilmadi!" });
    }
    try {
      const decoded = jwt.verify(sessionToken, JWT_SECRET);
      if (decoded.email !== email) {
        return res.status(403).json({ message: "Ruxsat yo'q!" });
      }
    } catch {
      return res.status(403).json({ message: "Token yaroqsiz yoki eskirgan!" });
    }

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Foydalanuvchi topilmadi!" });

    const botUsername = (process.env.TELEGRAM_BOT_USERNAME || "").replace(
      /^@/,
      "",
    );
    if (!botUsername)
      return res.status(500).json({ message: "Bot username sozlanmagan!" });

    // ── Tasodifiy 32 baytli xavfsiz token yaratiladi ────────────────────
    // URL da email o'rniga shu token ishlatiladi
    // Hacker bu tokenni bilmaydi va u 5 daqiqada eskiradi
    const linkToken = crypto.randomBytes(32).toString("hex");
    user.telegramLinkToken = linkToken;
    user.telegramLinkTokenExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 daqiqa
    await user.save();

    const link = `https://t.me/${botUsername}?start=${linkToken}`;
    return res.status(200).json({ link });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server xatosi", error: error.message });
  }
};

// ─── GET PROFILE ──────────────────────────────────────────────────────────────
const getProfile = async (req, res) => {
  try {
    let { email, sessionToken } = req.query;
    if (!email)
      return res.status(400).json({ message: "Email kiritilishi shart!" });

    email = email.toLowerCase().trim();

    if (!sessionToken) {
      return res.status(401).json({ message: "Sessiya tokeni topilmadi!" });
    }
    try {
      const decoded = jwt.verify(sessionToken, JWT_SECRET);
      if (decoded.email !== email) {
        return res.status(403).json({ message: "Ruxsat yo'q!" });
      }
    } catch {
      return res.status(403).json({ message: "Token yaroqsiz yoki eskirgan!" });
    }

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Foydalanuvchi topilmadi!" });

    const successLogCount = user.loginLogs.filter(
      (l) => l.status === "success",
    ).length;
    const isNewUser = successLogCount <= 1;

    return res.status(200).json({
      email: user.email,
      role: user.role || (isAdminEmail(user.email) ? "admin" : "user"),
      telegramLinked: !!user.telegramChatId,
      sessions: user.sessions.slice(-5).reverse(),
      loginLogs: user.loginLogs.slice(-10).reverse(),
      createdAt: user.createdAt,
      isNewUser,
      isGuest: !!user.isGuest,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server xatosi", error: error.message });
  }
};

// ─── REMOVE SESSION ───────────────────────────────────────────────────────────
const removeSession = async (req, res) => {
  try {
    let { email, sessionId, sessionToken } = req.body;
    email = email.toLowerCase().trim();

    if (!sessionToken) {
      return res.status(401).json({ message: "Sessiya tokeni topilmadi!" });
    }
    try {
      const decoded = jwt.verify(sessionToken, JWT_SECRET);
      if (decoded.email !== email) {
        return res.status(403).json({ message: "Ruxsat yo'q!" });
      }
    } catch {
      return res.status(403).json({ message: "Token yaroqsiz yoki eskirgan!" });
    }

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Foydalanuvchi topilmadi!" });

    user.sessions = user.sessions.filter((s) => s._id.toString() !== sessionId);
    await user.save();

    return res.status(200).json({ message: "Sessiya o'chirildi!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server xatosi", error: error.message });
  }
};

// ─── UNLINK TELEGRAM ──────────────────────────────────────────────────────────
const unlinkTelegram = async (req, res) => {
  try {
    let { email, sessionToken } = req.body;
    email = email.toLowerCase().trim();

    if (!sessionToken) {
      return res.status(401).json({ message: "Sessiya tokeni topilmadi!" });
    }
    try {
      const decoded = jwt.verify(sessionToken, JWT_SECRET);
      if (decoded.email !== email) {
        return res.status(403).json({ message: "Ruxsat yo'q!" });
      }
    } catch {
      return res.status(403).json({ message: "Token yaroqsiz yoki eskirgan!" });
    }

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "Foydalanuvchi topilmadi!" });

    user.telegramChatId = null;
    await user.save();

    return res.status(200).json({ message: "Telegram muvaffaqiyatli uzildi!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server xatosi", error: error.message });
  }
};

// ─── CHECK REMEMBER TOKEN ─────────────────────────────────────────────────────
const checkRememberToken = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(401).json({ valid: false });

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({
      email: decoded.email,
      rememberToken: token,
    });
    if (!user) return res.status(401).json({ valid: false });

    return res.status(200).json({ valid: true, email: user.email });
  } catch {
    return res.status(401).json({ valid: false });
  }
};

// ─── GOOGLE AUTH ─────────────────────────────────────────────────────────────
const googleAuth = (req, res) => {
  const client = getGoogleOAuthClient(req);
  const authorizeUrl = client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
    prompt: "select_account",
  });
  console.log("🔥 [GOOGLE AUTH URL]:", authorizeUrl);
  return res.redirect(authorizeUrl);
};

// ─── FACEBOOK AUTH ───────────────────────────────────────────────────────────
const facebookAuth = (req, res) => {
  const fbAppId = process.env.FACEBOOK_APP_ID;
  const redirectUri = `${process.env.BASE_URL || "http://localhost:5000"}/users/auth/facebook/callback`;
  const scope = ["email", "public_profile"].join(",");
  const authUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${fbAppId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}&response_type=code`;
  return res.redirect(authUrl);
};

// ─── FACEBOOK CALLBACK ───────────────────────────────────────────────────────
const facebookCallback = async (req, res) => {
  try {
    const { code } = req.query;
    if (!code) {
      return res.redirect("/?error=no_code");
    }

    const fbAppId = process.env.FACEBOOK_APP_ID;
    const fbAppSecret = process.env.FACEBOOK_APP_SECRET;
    const redirectUri = `${process.env.BASE_URL || "http://localhost:5000"}/users/auth/facebook/callback`;

    // Exchange code for access token
    const tokenResponse = await fetch(
      `https://graph.facebook.com/v18.0/oauth/access_token?client_id=${fbAppId}&client_secret=${fbAppSecret}&redirect_uri=${encodeURIComponent(redirectUri)}&code=${code}`,
    );
    const tokenData = await tokenResponse.json();

    if (!tokenData.access_token) {
      return res.redirect("/?error=token_exchange_failed");
    }

    // Get user info
    const userResponse = await fetch(
      `https://graph.facebook.com/v18.0/me?fields=email,name&access_token=${tokenData.access_token}`,
    );
    const userData = await userResponse.json();

    if (!userData.email) {
      return res.redirect("/?error=no_email");
    }

    const email = userData.email.toLowerCase().trim();
    const deviceInfo = getDeviceInfo(req);
    const now = new Date();

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email });
    }

    user.resendCount = 0;
    user.blockedUntil = null;
    user.code = null;

    const session = { ...deviceInfo, createdAt: now, lastActive: now };
    user.sessions.push(session);
    user.loginLogs.push({ ...deviceInfo, status: "success" });

    const rememberToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: "7d" });
    user.rememberToken = rememberToken;

    await user.save();

    return res.redirect(
      `/?email=${encodeURIComponent(email)}&googleToken=${encodeURIComponent(rememberToken)}`,
    );
  } catch (error) {
    console.error("facebookCallback xatosi:", error);
    return res.redirect("/?error=auth_failed");
  }
};

// ─── APPLE AUTH ─────────────────────────────────────────────────────────────
const appleAuth = (req, res) => {
  // Apple Sign In is handled client-side with Apple's JS SDK
  // This endpoint is not used - the client-side SDK handles the flow
  return res
    .status(200)
    .json({ message: "Apple Sign In is handled client-side" });
};

// ─── APPLE CALLBACK ─────────────────────────────────────────────────────────
const appleCallback = async (req, res) => {
  try {
    // Apple sends the authorization code in the POST body
    const { code, id_token, email, user: appleUser } = req.body;

    if (!code && !id_token) {
      return res.redirect("/?error=no_code_or_token");
    }

    // If we have an id_token directly from Apple's JS SDK (popup mode)
    if (id_token) {
      // For now, we'll use the email from the request if provided
      // In production, you should verify the id_token with Apple's public keys
      let userEmail = email;
      if (!userEmail && appleUser && appleUser.email) {
        userEmail = appleUser.email;
      }
      if (!userEmail) {
        return res.redirect("/?error=no_email");
      }
      userEmail = userEmail.toLowerCase().trim();

      const deviceInfo = getDeviceInfo(req);
      const now = new Date();

      let user = await User.findOne({ email: userEmail });
      if (!user) {
        user = new User({ email: userEmail });
      }

      user.resendCount = 0;
      user.blockedUntil = null;
      user.code = null;

      const session = { ...deviceInfo, createdAt: now, lastActive: now };
      user.sessions.push(session);
      user.loginLogs.push({ ...deviceInfo, status: "success" });

      const rememberToken = jwt.sign({ email: userEmail }, JWT_SECRET, {
        expiresIn: "7d",
      });
      user.rememberToken = rememberToken;

      await user.save();

      return res.json({ email: userEmail, token: rememberToken });
    }

    // If we have an authorization code (redirect mode)
    if (code) {
      // Exchange code for tokens with Apple
      // This requires Apple's client_id, client_secret, and redirect_uri
      // For now, return error as this requires proper Apple Developer setup
      return res.redirect("/?error=apple_code_exchange_not_implemented");
    }

    return res.redirect("/?error=invalid_apple_response");
  } catch (error) {
    console.error("appleCallback xatosi:", error);
    return res.redirect("/?error=auth_failed");
  }
};

// ─── TELEGRAM AUTH ─────────────────────────────────────────────────────────
const telegramAuth = (req, res) => {
  const botUsername = process.env.TELEGRAM_BOT_USERNAME;
  const redirectUri = `${process.env.BASE_URL || "http://localhost:5000"}/users/auth/telegram/callback`;
  const authUrl = `https://telegram.org/auth?bot_username=${botUsername}&origin=${encodeURIComponent(redirectUri)}&request_access=write`;
  return res.redirect(authUrl);
};

// ─── TELEGRAM CALLBACK ─────────────────────────────────────────────────────
const telegramCallback = async (req, res) => {
  try {
    const { tg_id, username, first_name, auth_date, hash } = req.query;

    if (!tg_id || !hash) {
      return res.redirect("/?error=invalid_telegram_data");
    }

    // Verify Telegram auth hash (requires bot token)
    // For simplicity, we'll create user with telegram ID
    const email = `telegram_${tg_id}@eurotexkids.uz`;
    const deviceInfo = getDeviceInfo(req);
    const now = new Date();

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        email,
        telegramId: tg_id,
        telegramUsername: username || first_name,
      });
    }

    user.resendCount = 0;
    user.blockedUntil = null;
    user.code = null;

    const session = { ...deviceInfo, createdAt: now, lastActive: now };
    user.sessions.push(session);
    user.loginLogs.push({ ...deviceInfo, status: "success" });

    const rememberToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: "7d" });
    user.rememberToken = rememberToken;

    await user.save();

    return res.redirect(
      `/?email=${encodeURIComponent(email)}&googleToken=${encodeURIComponent(rememberToken)}`,
    );
  } catch (error) {
    console.error("telegramCallback xatosi:", error);
    return res.redirect("/?error=auth_failed");
  }
};

// ─── DELETE ACCOUNT ───────────────────────────────────────────────────────
const deleteAccount = async (req, res) => {
  try {
    const { email, token } = req.body;

    if (!email || !token) {
      return res
        .status(400)
        .json({ message: "Email va token kiritilishi shart!" });
    }

    // Verify token
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      if (decoded.email !== email) {
        return res.status(403).json({ message: "Ruxsat yo'q!" });
      }
    } catch (error) {
      return res.status(401).json({ message: "Token yaroqsiz!" });
    }

    // Find and delete user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Foydalanuvchi topilmadi!" });
    }

    await User.deleteOne({ email });

    return res.json({ message: "Hisob muvaffaqiyatli o'chirildi!" });
  } catch (error) {
    console.error("deleteAccount xatosi:", error);
    return res.status(500).json({ message: "Xatolik yuz berdi!" });
  }
};

// ─── GOOGLE CALLBACK ─────────────────────────────────────────────────────────
const googleCallback = async (req, res) => {
  try {
    const { code } = req.query;
    if (!code) {
      return res.redirect("/");
    }

    const client = getGoogleOAuthClient(req);
    console.log(
      "👉 Google OAuth Exchange for code:",
      code.slice(0, 10) + "...",
    );
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);

    let email = null;
    if (tokens.id_token) {
      try {
        const ticket = await client.verifyIdToken({
          idToken: tokens.id_token,
          audience: (process.env.GOOGLE_CLIENT_ID || "").trim(),
        });
        const payload = ticket.getPayload();
        email = payload ? payload.email : null;
      } catch (e) {
        console.warn(
          "verifyIdToken verify failed, decoding id_token directly:",
          e.message,
        );
        const decoded = jwt.decode(tokens.id_token);
        if (decoded && decoded.email) email = decoded.email;
      }
    }

    if (!email && tokens.access_token) {
      try {
        const userRes = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${tokens.access_token}` },
          },
        );
        const userData = await userRes.json();
        email = userData ? userData.email : null;
      } catch (e) {
        console.error("UserInfo fetch failed:", e.message);
      }
    }

    if (!email) {
      console.error("No email found in Google response");
      return res.redirect("/");
    }

    email = email.toLowerCase().trim();
    const deviceInfo = getDeviceInfo(req);
    const now = new Date();

    let user = await User.findOne({ email });
    if (!user) {
      // Register new user
      user = new User({ email });
    }

    // Assign Admin role if email is in ADMIN_EMAILS
    const role = isAdminEmail(email) ? "admin" : user.role || "user";
    user.role = role;

    // Success: reset resend count, add session & log
    user.resendCount = 0;
    user.blockedUntil = null;
    user.code = null;

    const session = { ...deviceInfo, createdAt: now, lastActive: now };
    user.sessions.push(session);
    user.loginLogs.push({ ...deviceInfo, status: "success" });

    // Always generate a token with role
    const rememberToken = jwt.sign({ email, role }, JWT_SECRET, {
      expiresIn: "7d",
    });
    user.rememberToken = rememberToken;

    await user.save();

    console.log(`🎉 [GOOGLE AUTH SUCCESS] User: ${email} logged in!`);
    return res.redirect(
      `/?email=${encodeURIComponent(email)}&googleToken=${encodeURIComponent(rememberToken)}`,
    );
  } catch (error) {
    console.error("❌ googleCallback Error:", error.message || error);
    return res.redirect("/?email_prompt=true");
  }
};

// ─── GUEST AUTH ──────────────────────────────────────────────────────────────
const guestAuth = async (req, res) => {
  try {
    const randomId = crypto.randomBytes(4).toString("hex");
    const email = `mehmon_${randomId}@eurotexkids.uz`;

    const deviceInfo = getDeviceInfo(req);
    const now = new Date();

    const user = new User({
      email,
      isGuest: true,
    });

    const session = { ...deviceInfo, createdAt: now, lastActive: now };
    user.sessions.push(session);
    user.loginLogs.push({ ...deviceInfo, status: "success" });

    // Generate temporary rememberToken (valid for 1 day)
    const rememberToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1d" });
    user.rememberToken = rememberToken;

    await user.save();

    // Redirect to profile with token
    return res.redirect(
      `/?email=${encodeURIComponent(email)}&googleToken=${encodeURIComponent(rememberToken)}`,
    );
  } catch (error) {
    console.error("guestAuth xatosi:", error);
    return res.redirect("/?error=auth_failed");
  }
};

// ─── REAL-TIME EMAIL MX VALIDATION ────────────────────────────────────────────
const validateEmail = async (req, res) => {
  try {
    let { email } = req.body;
    if (!email)
      return res
        .status(400)
        .json({ valid: false, message: "Email kiritilishi shart" });

    email = email.toLowerCase().trim();
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email)) {
      return res.status(200).json({ valid: false, error: "format" });
    }

    const domain = email.split("@")[1];

    dns.resolveMx(domain, (err, addresses) => {
      if (err || !addresses || addresses.length === 0) {
        return res.status(200).json({ valid: false, error: "mx" });
      }
      return res.status(200).json({ valid: true });
    });
  } catch (error) {
    console.error("validateEmail xatosi:", error);
    return res.status(500).json({ valid: false, error: "server" });
  }
};

// Map to track active QR login sessions in-memory
const activeQrTokens = new Map();

// Helper to periodically cleanup expired tokens (older than 2 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [token, data] of activeQrTokens.entries()) {
    if (now - data.createdAt > 2 * 60 * 1000) {
      activeQrTokens.delete(token);
    }
  }
}, 60 * 1000);

const qrGenerate = async (req, res) => {
  try {
    const token = crypto.randomBytes(24).toString("hex");
    activeQrTokens.set(token, {
      status: "pending",
      email: null,
      rememberToken: null,
      createdAt: Date.now(),
    });
    return res.status(200).json({ token });
  } catch (error) {
    console.error("qrGenerate error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const qrStatus = async (req, res) => {
  try {
    const { token } = req.query;
    if (!token) return res.status(200).json({ status: "expired" });

    const data = activeQrTokens.get(token);
    if (!data) return res.status(200).json({ status: "expired" });

    if (Date.now() - data.createdAt > 2 * 60 * 1000) {
      activeQrTokens.delete(token);
      return res.status(200).json({ status: "expired" });
    }

    if (data.status === "authorized") {
      // Remove token once consumed
      activeQrTokens.delete(token);
      return res.status(200).json({
        status: "authorized",
        email: data.email,
        rememberToken: data.rememberToken,
      });
    }

    return res.status(200).json({ status: "pending" });
  } catch (error) {
    console.error("qrStatus error:", error);
    return res.status(200).json({ status: "expired" });
  }
};

const qrAuthorize = async (req, res) => {
  try {
    const { token, sessionToken } = req.body;
    if (!token || !sessionToken) {
      return res
        .status(400)
        .json({ message: "Token va sessiya talab qilinadi!" });
    }

    let decoded;
    try {
      decoded = jwt.verify(sessionToken, JWT_SECRET);
    } catch {
      return res.status(401).json({ message: "Sessiya yaroqsiz!" });
    }

    const user = await User.findOne({
      email: decoded.email.toLowerCase().trim(),
    });
    if (!user)
      return res.status(404).json({ message: "Foydalanuvchi topilmadi!" });

    const qrData = activeQrTokens.get(token);
    if (!qrData)
      return res
        .status(400)
        .json({ message: "QR kod yaroqsiz yoki eskirgan!" });

    if (qrData.status !== "pending") {
      return res
        .status(400)
        .json({ message: "Ushbu QR kod allaqachon ishlatilgan!" });
    }

    // Authorize this QR token
    const newRememberToken = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    // Update user rememberToken in DB
    user.rememberToken = newRememberToken;

    // Add log
    const deviceInfo = getDeviceInfo(req);
    user.loginLogs.push({
      ip: deviceInfo.ip + " (QR Login)",
      device: deviceInfo.device,
      browser: deviceInfo.browser,
      os: deviceInfo.os,
      status: "success",
    });
    await user.save();

    activeQrTokens.set(token, {
      status: "authorized",
      email: user.email,
      rememberToken: newRememberToken,
      createdAt: qrData.createdAt,
    });

    return res
      .status(200)
      .json({ message: "QR kod muvaffaqiyatli tasdiqlandi!" });
  } catch (error) {
    console.error("qrAuthorize error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

const fs = require("fs");
const SLIDES_FILE = path.join(__dirname, "../slides.json");

let slideVersion = Date.now();
let sseClients = [];

const getSlides = async (req, res) => {
  try {
    if (!fs.existsSync(SLIDES_FILE)) {
      return res.status(200).json({ slides: {}, version: slideVersion });
    }
    const data = fs.readFileSync(SLIDES_FILE, "utf8");
    const slides = JSON.parse(data || "{}");
    return res.status(200).json({ slides, version: slideVersion });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Slides error", error: err.message });
  }
};

const getSlidesStream = (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  const clientId = Date.now();
  const newClient = { id: clientId, res };
  sseClients.push(newClient);

  req.on("close", () => {
    sseClients = sseClients.filter((c) => c.id !== clientId);
  });
};

const saveSlideImage = async (req, res) => {
  try {
    const { slideIndex, imgData } = req.body;
    if (slideIndex === undefined || !imgData) {
      return res
        .status(400)
        .json({ message: "slideIndex va imgData kiritilishi shart!" });
    }

    let slides = {};
    if (fs.existsSync(SLIDES_FILE)) {
      try {
        slides = JSON.parse(fs.readFileSync(SLIDES_FILE, "utf8") || "{}");
      } catch (e) {
        slides = {};
      }
    }

    slides[slideIndex] = imgData;
    fs.writeFileSync(SLIDES_FILE, JSON.stringify(slides), "utf8");

    slideVersion = Date.now();

    // Broadcast to all active users via SSE in real-time without page refresh!
    sseClients.forEach((client) => {
      try {
        client.res.write(
          `data: ${JSON.stringify({ version: slideVersion, slideIndex, imgData })}\n\n`,
        );
      } catch (e) {}
    });

    console.log(
      `⚡ [LIVE SYNC] Slide #${slideIndex} serverda saqlandi va barcha foydalanuvchilar ekranida REFRESHSIZ yangilandi!`,
    );
    return res.status(200).json({
      message:
        "Slide rasmi saqlandi va real-vaqtda barcha userlarda yangilandi!",
      slideIndex,
      version: slideVersion,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Slide saqlashda xatolik", error: err.message });
  }
};

module.exports = {
  sendCode,
  verifyCode,
  getTelegramLink,
  getProfile,
  removeSession,
  unlinkTelegram,
  checkRememberToken,
  googleAuth,
  googleCallback,
  guestAuth,
  validateEmail,
  deleteAccount,
  getSlides,
  getSlidesStream,
  saveSlideImage,
};
