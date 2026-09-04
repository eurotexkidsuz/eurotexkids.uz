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

// Admin API himoya middleware — faqat admin tokenini qabul qiladi
function requireAdmin(req, res, next) {
  const cookies = parseCookies(req);
  const token =
    cookies.eurotex_session ||
    (req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.slice(7)
      : null) ||
    req.headers["x-admin-token"];

  const adminEmail = (
    req.headers["x-admin-email"] ||
    req.query?.adminEmail ||
    ""
  ).toLowerCase().trim();

  // Master local admin token check
  if (token === "admin_master_token_2026" && ADMIN_EMAILS.includes(adminEmail)) {
    req.adminUser = { email: adminEmail, role: "admin" };
    return next();
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Ruxsat yo'q. Iltimos tizimga kiring.",
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const email = String(decoded.email || "").toLowerCase().trim();
    const isAdmin = decoded.role === "admin" || ADMIN_EMAILS.includes(email);

    if (!isAdmin) {
      return res.status(403).json({
        success: false,
        message: "Faqat vakolatli adminlar kirishi mumkin.",
      });
    }

    req.adminUser = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Token noto'g'ri yoki muddati tugagan. Qayta kiring.",
    });
  }
}

module.exports = { requireAdmin, parseCookies };

