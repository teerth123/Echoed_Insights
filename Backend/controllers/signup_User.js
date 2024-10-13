const User = require('../Models/user');
const crypto = require('crypto');
const { sendOTPEmail } = require('../emailService');

const signup_User = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({ msg: "User already exists, try login" });
        }

        const otp = crypto.randomInt(100000, 999999).toString(); // Generate a 6-digit OTP

        // Create user instance without saving
        const newUser = new User({ firstname, lastname, email, password, otp, otpExpires: Date.now() + 300000 }); // OTP valid for 5 minutes

        await sendOTPEmail(email, otp); // Send OTP to user

        // Save the user temporarily (or in your session store) and return a response
        await newUser.save();

        return res.status(201).json({
            msg: 'User created successfully. Please check your email for the OTP.'
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = signup_User;
