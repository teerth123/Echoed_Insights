const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendOTPEmail = (to, otp) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}.`
    };

    return transporter.sendMail(mailOptions);
};

module.exports = { sendOTPEmail };
