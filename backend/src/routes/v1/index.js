const express = require('express');

const { InfoController} = require('../../controllers');
const router = express.Router();

const authRoutes = require('./auth');
const locationsRoutes = require('./locations');
const tripRoutes = require('./trip');

router.get('/info', InfoController.info);

router.use('/auth', authRoutes);
router.use('/locations', locationsRoutes);
router.use('/trip', tripRoutes);

module.exports = router;