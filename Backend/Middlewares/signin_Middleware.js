const zod = require('zod');

const signin_Middleware = (req, res, next) => {
    const schema = zod.object({
        email: zod.string().email('Invalid email format'),
        password: zod.string().min(8, 'Password must be at least 8 characters long')
    });

    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({
            msg: 'Enter correct credentials',
            errors: parsed.error.flatten()
        });
    }
    next();
};

module.exports = signin_Middleware;
