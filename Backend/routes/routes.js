const express = require('express');
const userRouter = require('./user'); // Ensure this path is correct
const router = express.Router();

router.use('/user', userRouter); // Use the user router here

module.exports = router;
