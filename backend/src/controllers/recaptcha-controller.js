const axios = require('axios');
const { RecaptchaConfig } = require('../config');

const verifyRecaptcha = async (req, res, next) => {
  const token = req.body.token;

  if (!token) {
    return res.status(400).json({ success: false, message: 'reCAPTCHA token is missing' });
  }

  try {
    const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, null, {
      params: {
        secret: RecaptchaConfig.RECAPTCHA_SECRET_KEY,
        response: token
      }
    });

    const data = response.data;

    if (!data.success) {
      return res.status(403).json({ success: false, message: 'Failed reCAPTCHA verification' });
    }

    // If verification passes, allow the request to proceed
    next();
  } catch (error) {
    console.error("reCAPTCHA verification error:", error.message);
    res.status(500).json({ success: false, message: 'Internal server error during reCAPTCHA verification' });
  }
};

module.exports = {
  verifyRecaptcha
};