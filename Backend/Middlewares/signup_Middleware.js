const zod = require('zod');

const signup_Middleware = (req, res, next) => {
    const zod_Schema = zod.object({
        firstname: zod.string().min(1, 'First name is required'),
        lastname: zod.string().min(1, 'Last name is required'),
        email: zod.string().email('Invalid email format'),
        password: zod.string().min(8, 'Password must be at least 8 characters long'),

    });

    const parsed = zod_Schema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({
            msg: 'Enter correct credentials',
            errors: parsed.error.flatten()
        });
    }
    next();
};

module.exports = signup_Middleware;
