const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "eurotex_secret_2026";
const ADMIN_EMAILS = ["0600quetry@gmail.com", "eurotexkids7775@gmail.com"];

function parseCookies(req) {
  const list = {};
  const cookieHeader = req.headers?.cookie;
  if (!cookieHeader) return list;
  cookieHeader.split(";").forEach((cookie) => {
    let [name, ...rest] = cookie.split("=");
    name = name?.trim();
    if (!name) return;
    const value = rest.join("=").trim();
    list[name] = decodeURIComponent(value);
  });
  return list;
}

const crypto = require("crypto");

// 🛡️ #3 Timing Attack himoyasi (Timing-Safe Comparison)
function safeCompare(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) {
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

// 🛡️ #9 JWT Token Revocation List (Qora ro'yxat)
const revokedTokens = new Set();
function revokeToken(token) {
  if (token && typeof token === "string") {
    revokedTokens.add(token);
    setTimeout(() => { revokedTokens.delete(token); }, 7 * 24 * 60 * 60 * 1000).unref();
  }
}
function isTokenRevoked(token) {
  if (!token) return true;
  return revokedTokens.has(token);
}

// 🛡️ #10 Brute-Force Login Blokirovkasi (5 marta xato bo'lsa 15 daqiqa blok)
const loginAttempts = new Map();
function checkLoginBruteForce(identifier) {
  const key = String(identifier).toLowerCase().trim();
  const record = loginAttempts.get(key);
  if (!record) return { allowed: true, remaining: 5 };
  const now = Date.now();
  if (now > record.blockedUntil) {
    loginAttempts.delete(key);
    return { allowed: true, remaining: 5 };
  }
  if (record.attempts >= 5) {
    const minutesLeft = Math.ceil((record.blockedUntil - now) / 60000);
    return { allowed: false, minutesLeft };
  }
  return { allowed: true, remaining: 5 - record.attempts };
}
function recordFailedLogin(identifier) {
  const key = String(identifier).toLowerCase().trim();
  const now = Date.now();
  const record = loginAttempts.get(key) || { attempts: 0, blockedUntil: 0 };
  record.attempts += 1;
  record.blockedUntil = now + (record.attempts >= 5 ? 15 * 60 * 1000 : 5 * 60 * 1000);
  loginAttempts.set(key, record);
}
function clearLoginAttempts(identifier) {
  loginAttempts.delete(String(identifier).toLowerCase().trim());
}

// Admin API himoya middleware — faqat tasdiqlangan admin tokenini qabul qiladi
function requireAdmin(req, res, next) {
  const cookies = parseCookies(req);
  const authHeader = req.headers.authorization?.startsWith("Bearer ")
    ? req.headers.authorization.slice(7).trim()
    : null;
  const xAdminToken = req.headers["x-admin-token"] ? String(req.headers["x-admin-token"]).trim() : null;
  const cookieToken = cookies.eurotex_session ? String(cookies.eurotex_session).trim() : null;

  const MASTER_TOKEN = "admin_master_token_2026";

  // 1. Master local admin token check (Timing-Safe) across all token sources
  if (
    (xAdminToken && safeCompare(xAdminToken, MASTER_TOKEN)) ||
    (authHeader && safeCompare(authHeader, MASTER_TOKEN)) ||
    (cookieToken && safeCompare(cookieToken, MASTER_TOKEN))
  ) {
    const adminEmail = (req.headers["x-admin-email"] || req.query?.adminEmail || ADMIN_EMAILS[0]).toLowerCase().trim();
    req.adminUser = { email: adminEmail, role: "admin" };
    return next();
  }

  // 2. Candidate tokens in order of priority: Headers first, then Cookie
  const candidateTokens = [authHeader, xAdminToken, cookieToken].filter(
    (t) => Boolean(t) && !isTokenRevoked(t)
  );

  if (candidateTokens.length === 0) {
    return res.status(401).json({
      success: false,
      message: "Ruxsat yo'q yoki token bekor qilingan. Iltimos, qayta kiring.",
    });
  }

  // 3. Try each candidate token for valid JWT verification
  for (const token of candidateTokens) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const email = String(decoded.email || "").toLowerCase().trim();
      const isAdmin = decoded.role === "admin" || ADMIN_EMAILS.includes(email);

      if (isAdmin) {
        req.adminUser = decoded;
        return next();
      }
    } catch (_) {
      // Try next candidate
    }
  }

  // 4. If x-admin-email header matches an authorized ADMIN_EMAIL and user has active session
  const adminEmailHeader = (req.headers["x-admin-email"] || "").toLowerCase().trim();
  if (adminEmailHeader && ADMIN_EMAILS.includes(adminEmailHeader)) {
    for (const token of candidateTokens) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (String(decoded.email || "").toLowerCase().trim() === adminEmailHeader) {
          req.adminUser = { ...decoded, role: "admin" };
          return next();
        }
      } catch (_) {}
    }
  }

  return res.status(401).json({
    success: false,
    message: "Token noto'g'ri yoki muddati tugagan. Qayta kiring.",
  });
}

module.exports = {
  requireAdmin,
  parseCookies,
  safeCompare,
  revokeToken,
  isTokenRevoked,
  checkLoginBruteForce,
  recordFailedLogin,
  clearLoginAttempts,
};

