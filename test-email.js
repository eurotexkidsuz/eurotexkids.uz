require("dotenv").config();
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const nodemailer = require("nodemailer");

console.log("USER:", process.env.EMAIL_USER);
console.log("PASS:", process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "venomuz701@gmail.com",
    pass: "ckuu rvfp mmvy gaii",
  },
});

async function test() {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "0600quetry@gmail.com",
      subject: "Test email to 0600quetry",
      text: "This is a test",
    });
    console.log("SUCCESS!");
  } catch (e) {
    console.error("ERROR:", e.message);
  }
}
test();
