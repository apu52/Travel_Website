const express = require('express');

const { LocationController } = require('../../controllers');
const { UserMiddlewares } = require('../../middlewares');

const router = express.Router();

router.get('/:id',LocationController.getALocation);
router.get('/',LocationController.getAllLocation);
// // Authorization needed 
router.post('/create',UserMiddlewares.userAuthenticated,UserMiddlewares.roleAuthenticated,LocationController.createLocation);
router.put('/:id',UserMiddlewares.userAuthenticated,UserMiddlewares.roleAuthenticated,LocationController.updateLocation);
router.delete('/:id',UserMiddlewares.userAuthenticated,UserMiddlewares.roleAuthenticated,LocationController.deleteLocation);

module.exports = router;