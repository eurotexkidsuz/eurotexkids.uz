const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "eurotexkids7775@gmail.com",
    pass: "dwgfrxwuqtzmfpxb",
  },
});

async function run() {
  try {
    const info = await transporter.sendMail({
      from: '"Eurotex.uz" <eurotexkids7775@gmail.com>',
      to: "abdulaziz10102013abdz@gmail.com",
      subject: "Eurotex.uz — Sinov Koda",
      text: "Kodingiz: 777888",
    });
    console.log("SUCCESS_MESSAGE_ID:", info.messageId);
  } catch (err) {
    console.error("FAIL_ERROR:", err.message);
  }
}

run();
