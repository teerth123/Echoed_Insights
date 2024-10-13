const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true, // removes whitespace from both ends
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // ensures no two users can have the same email
        lowercase: true, // store email in lowercase
        validate: {
            validator: function(v) {
                return /^\S+@\S+\.\S+$/.test(v); // simple email regex
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8, // ensures a minimum password length
    },
    PRN: {
        type: String,
        unique: true, // ensures PRN is unique
    },
    walchandiate: {
        type: Boolean,
        default: false, // default value can be set to false
    },
    role: {
        type: String,
        enum: ['undergrad', 'alumni', ''], // restricts values to specific options
    },
    otp: {
        type: String, // Field to store the OTP
    },
    otpExpires: {
        type: Date, // Field to store OTP expiration time
    },
    isCompleted: {
        type: Boolean,
        default: false, // Field to indicate if the signup process is complete
    },
}, { timestamps: true }); // adds createdAt and updatedAt timestamps

module.exports = mongoose.model('User', userSchema);
