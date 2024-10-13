const zod = require('zod');
const User = require('../Models/user');
require('dotenv').config();

const update_User = async (req, res) => {
    const updateBody = zod.object({
        password: zod.string().min(8, 'Password must be at least 8 characters long').optional(),
        firstname: zod.string().min(1, 'First name is required').optional(),
        lastname: zod.string().min(1, 'Last name is required').optional(),
        email: zod.string().email('Invalid email format').optional(),
        role: zod.enum(['undergrad', 'alumni']).optional()
    });

    const { success, error } = updateBody.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Error while updating information",
            errors: error.errors
        });
    }

    const existingUser = await User.findById(req.userId);
    if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
    }

    const updatedUser = {
        ...existingUser.toObject(),
        ...req.body
    };

    await User.replaceOne({ _id: req.userId }, updatedUser);

    res.json({
        message: "Updated successfully"
    });
};

module.exports = update_User;
