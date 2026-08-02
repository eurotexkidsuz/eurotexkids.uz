const nodemailer = require('nodemailer');
require('dotenv').config();

console.log('Starting Email Test...');
console.log('User:', process.env.EMAIL_USER);

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // TLS
    auth: {
        user: process.env.EMAIL_USER.trim(),
        pass: process.env.EMAIL_PASS.replace(/\s+/g, '')
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000
});

transporter.sendMail({
    from: `"Eurotex.uz" <${process.env.EMAIL_USER}>`,
    to: '0600quetry@gmail.com',
    subject: 'Eurotex Real Email Verification Code',
    text: 'Assalomu aleykum! Eurotex.uz tasdiqlash kodingiz: 998877'
}, (err, info) => {
    if (err) {
        console.error('❌ ERROR:', err);
        process.exit(1);
    } else {
        console.log('🎉 SUCCESS:', info.response);
        process.exit(0);
    }
});
