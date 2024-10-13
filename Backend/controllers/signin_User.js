const zod = require('zod');
const jwt = require('jsonwebtoken');
const User = require('../Models/user');
require('dotenv').config();
const secret = process.env.secret;

const signin_User = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
        return res.status(401).json({
            msg: 'User not found or password incorrect'
        });
    }

    const userId = user._id;
    const token = jwt.sign({ userId }, secret, { expiresIn: '7d' }); // Change to '1h' if shorter expiration is needed

    return res.status(200).json({
        msg: 'Signed in successfully',
        token
    });
};

module.exports = signin_User;
