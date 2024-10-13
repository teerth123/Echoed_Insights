const zod = require('zod');

const complete_signup_User_Middleware = (req, res, next) => {
    const zod_Schema = zod.object({
        PRN: zod.string().optional().default(""), // PRN can be an empty string
        walchandiate: zod.boolean(), // Ensures walchandiate is a boolean
        role: zod.string().optional().default(""), // Role can be an empty string
        otp: zod.string().min(1, { message: "OTP is required" }), // Ensures OTP is not empty
        email: zod.string().email({ message: "Invalid email format" }) // Validates email format
    });

    const parsed = zod_Schema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({
            msg: 'Enter correct credentials',
            errors: parsed.error.flatten() // Provides detailed error information
        });
    }

    next();
};

module.exports = complete_signup_User_Middleware;
