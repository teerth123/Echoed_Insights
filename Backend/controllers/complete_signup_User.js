const User = require('../Models/user'); // Ensure this path is correct
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.complete_signup_User = async (req, res) => {
    const { otp, PRN, walchandiate, role, email } = req.body; // Ensure email is passed in the body

    try {

        
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }


        // Check OTP validity
        if (user.otp !== otp || Date.now() > user.otpExpires) {
            return res.status(400).json({ msg: 'Invalid or expired OTP.' });
        }

        // Update user with additional fields
        user.PRN = PRN;
        user.walchandiate = walchandiate;
        user.role = role;
        user.otp = undefined; // Clear OTP
        user.otpExpires = undefined; // Clear OTP expiration
        user.isCompleted = true; // Mark the user as completed

        await user.save(); // Save the updated user

        // Generate JWT
        const token = jwt.sign({ userId: user._id }, process.env.secret, { expiresIn: '1h' });

        return res.status(200).json({
            msg: 'User registered successfully',
            token: token // Send the token back to the user
        });
    } catch (error) {

        return res.status(500).json({ message: error.message });
    }
};
