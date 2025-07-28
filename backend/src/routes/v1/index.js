const express = require('express');
const { InfoController } = require('../../controllers');
const { verifyRecaptcha } = require('../../controllers/recaptcha-controller');

const authRoutes = require('./auth');
const locationsRoutes = require('./locations');
const tripRoutes = require('./trip');

const router = express.Router();

router.get('/info', InfoController.info);

router.use('/auth', authRoutes);
router.use('/locations', locationsRoutes);
router.use('/trip', tripRoutes);

// ✅ Add this
router.post('/verify-recaptcha', verifyRecaptcha);

module.exports = router;