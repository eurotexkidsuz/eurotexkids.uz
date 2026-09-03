const fs = require("fs");
const path = require("path");

const CONFIG_FILE = path.join(__dirname, "../telegram_config.json");

function getTelegramConfig() {
  let token = process.env.TELEGRAM_BOT_TOKEN || "";
  let chatId = process.env.TELEGRAM_ADMIN_CHAT_ID || "";

  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const data = JSON.parse(fs.readFileSync(CONFIG_FILE, "utf8"));
      if (data.token) token = data.token;
      if (data.chatId) chatId = data.chatId;
    }
  } catch (e) {}

  return { token, chatId };
}

function saveTelegramConfig(token, chatId) {
  try {
    fs.writeFileSync(CONFIG_FILE, JSON.stringify({ token, chatId }, null, 2), "utf8");
    return true;
  } catch (e) {
    console.error("Error saving telegram_config.json:", e);
    return false;
  }
}

async function sendTelegramMessage(text) {
  const { token, chatId } = getTelegramConfig();
  if (!token || !chatId) {
    console.log("ℹ️ Telegram bot token or chat ID not set yet.");
    return false;
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    });
    const result = await res.json();
    return result.ok;
  } catch (err) {
    console.error("Telegram API send error:", err.message);
    return false;
  }
}

// 1. Yangi Buyurtma Bildirishnomasi
async function sendNewOrderNotification(order) {
  const itemsText = (order.items || [])
    .map(
      (item, idx) =>
        `   ${idx + 1}. <b>${item.title || item.name || "Kastyum"}</b> (${item.size || "-"} o'lcham, ${item.color || "-"}) x ${item.quantity || 1} ta`,
    )
    .join("\n");

  const msg = `
👑 <b>YANGI BUYURTMA # ${order.orderId || "Yangi"}</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Mijoz:</b> ${order.customerName || order.recipient || "Noma'lum"}
📞 <b>Telefon:</b> <code>${order.phone || "-"}</code>
📍 <b>Manzil:</b> ${order.region || ""} ${order.district || ""} ${order.address || ""}
💳 <b>To'lov:</b> ${order.paymentMethod || "Naqd"}
💰 <b>Jami Summa:</b> <b>${(order.totalPriceUzs || order.total || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm</b> (${order.totalPriceUsd || 0}$)

📦 <b>Mahsulotlar:</b>
${itemsText}

📅 <b>Vaqti:</b> ${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}
`.trim();

  return await sendTelegramMessage(msg);
}

// 2. ⚡ 1-Klikda Xarid / Tezkor Qo'ng'iroq Bildirishnomasi
async function sendQuickLeadNotification(lead) {
  const msg = `
⚡ <b>SHOSHILINCH: 1-KLIKDA BUYURTMA!</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Mijoz:</b> ${lead.name || "Xaridor"}
📞 <b>Telefon:</b> <code>${lead.phone}</code>
🧥 <b>Mahsulot:</b> <b>${lead.productTitle || "Kostyum"}</b>
📐 <b>O'lchami:</b> ${lead.size || "-"} | 🎨 <b>Rangi:</b> ${lead.color || "-"}
💰 <b>Narxi:</b> ${lead.price || "-"}

⏰ <i>Operatorlar darhol mijozga qo'ng'iroq qiling!</i>
`.trim();

  return await sendTelegramMessage(msg);
}

// 3. 🤝 "Eurotex Nasiya" Arizasi Bildirishnomasi
async function sendNasiyaNotification(nasiya) {
  const msg = `
🤝 <b>YANGI "EUROTEX NASIYA" ARIZASI!</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Ariza beruvchi:</b> ${nasiya.name || "-"}
📞 <b>Telefon:</b> <code>${nasiya.phone}</code>
🪪 <b>Pasport/JSHSHIR:</b> <code>${nasiya.passport || "-"}</code>
⏳ <b>Muddat:</b> <b>${nasiya.months || 6} oy</b>
🧥 <b>Mahsulot:</b> ${nasiya.productTitle || "Eurotex Kostyum"}
💰 <b>Umumiy narx:</b> ${nasiya.totalAmount || "-"}
💵 <b>Oylik to'lov:</b> <b>${nasiya.monthlyPayment || "-"}</b>

📑 <i>Iltimos, admin paneldan tekshirib tasdiqlang!</i>
`.trim();

  return await sendTelegramMessage(msg);
}

module.exports = {
  getTelegramConfig,
  saveTelegramConfig,
  sendTelegramMessage,
  sendNewOrderNotification,
  sendQuickLeadNotification,
  sendNasiyaNotification,
};
