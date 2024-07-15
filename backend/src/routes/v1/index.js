const express = require('express');

const { InfoController,UserController,LocationController,TripBookingController } = require('../../controllers');
const { UserMiddlewares } = require('../../middlewares');

const router = express.Router();

router.get('/info', InfoController.info);
router.post('/auth/signup',UserController.signup );
router.post('/auth/login',UserController.login );
router.get('/auth/logout',UserMiddlewares.userAuthenticated,UserController.logout);

router.get('/locations/:id',LocationController.getALocation);
router.get('/locations',LocationController.getAllLocation);
// // Authorization needed 
router.post('/locations/create',UserMiddlewares.userAuthenticated,UserMiddlewares.roleAuthenticated,LocationController.createLocation);
router.put('/locations/:id',UserMiddlewares.userAuthenticated,UserMiddlewares.roleAuthenticated,LocationController.updateLocation);
router.delete('/locations/:id',UserMiddlewares.userAuthenticated,UserMiddlewares.roleAuthenticated,LocationController.deleteLocation);

router.post('/location/book',UserMiddlewares.userAuthenticated,TripBookingController.bookLocation);
router.get('/admin',UserMiddlewares.userAuthenticated,UserMiddlewares.roleAuthenticated,UserController.AdminSection);

// router.post('/auth/login/2fa',UserMiddlewares.userAuthenticated,UserController.twoFactorValidate);
// router.get('/userdetails',UserMiddlewares.userAuthenticated ,UserController.userDetails)

router.delete('/deleteallusers',UserController.deleteAllUsers)
module.exports = router;