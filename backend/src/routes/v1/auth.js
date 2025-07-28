const express = require('express');
const router = express.Router();
const { UserController } = require('../../controllers');
const { verifyRecaptcha } = require('../../controllers/recaptcha-controller');

// Signup route with reCAPTCHA middleware
router.post('/signup', verifyRecaptcha, UserController.signup);
// Optional: login with reCAPTCHA too
router.get('/logout',UserMiddlewares.userAuthenticated,UserController.logout);
router.post('/login', verifyRecaptcha, UserController.login);

module.exports = router;