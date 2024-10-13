const   express = require('express');
const   authMiddleware  = require('../Middlewares/auth_Middleware');
const   signup_Middleware = require('../Middlewares/signup_Middleware');
const   signin_Middleware = require('../Middlewares/signin_Middleware');
const   signup_User  = require('../controllers/signup_User');
const   signin_User  = require('../controllers/signin_User');
const   update_User  = require('../controllers/update_User');
const   {complete_signup_User} = require('../controllers/complete_signup_User');
const complete_signup_User_Middleware = require('../Middlewares/complete_signup_User_Middleware');

const router = express.Router();

// Sign-up route
router.post('/sign-up', signup_Middleware, signup_User);

// Complete signup route
router.put('/complete-signup', complete_signup_User_Middleware, complete_signup_User);


// Sign-in route
router.post('/sign-in', signin_Middleware, signin_User);

// Update user route
router.put('/update', authMiddleware, update_User);

module.exports = router;
