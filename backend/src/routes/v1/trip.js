const express = require('express');

const { TripBookingController } = require('../../controllers');
const { UserMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/book',UserMiddlewares.userAuthenticated,TripBookingController.bookLocation);

module.exports = router;