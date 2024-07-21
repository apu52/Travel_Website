const express = require('express');

const { UserController } = require('../../controllers');
const { UserMiddlewares } = require('../../middlewares');

const router = express.Router();

router.post('/signup',UserController.signup );
router.post('/login',UserController.login );
router.get('/logout',UserMiddlewares.userAuthenticated,UserController.logout);

module.exports = router;