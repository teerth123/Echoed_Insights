const zod = require('zod');

const complete_signup_User_Middleware = (req, res, next) => {

    const zod_Schema = zod.object({
        PRN: zod.string().min(1, 'PRN is required'), // Ensures PRN is not empty
        walchandiate: zod.boolean(), // Validates that walchandiate is a boolean
        role: zod.enum(['undergrad', 'alumni'], 'Role is required'), // Validates role
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
