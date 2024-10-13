const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.secret;

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.userId;
        next();
    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = authMiddleware;


