const { StatusCodes } =require("http-status-codes");
const jwt = require('jsonwebtoken');
const {ServerConfig} = require('../config');
const cookieParser = require('cookie-parser');
const User = require('../models/User');

const userAuthenticated = async (req, res, next) => {
    try {
        // Parse access_token cookie
        // console.log("Inside of fn");
        const accessToken = req.cookies.access_token;
        if (!accessToken) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Access token is required" });
        }
        // console.log("Inside of fn2");
        // Check if access token is invalid
        // console.log("Inside of fn3");
        // Verify access token and get user ID
        const decodedAccessToken = await jwt.verify(accessToken, ServerConfig.JWT_KEY);
        // console.log(decodedAccessToken);
        if (!decodedAccessToken) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Access token invalid or expired" });
        }
        // console.log("Inside of fn4");
        // Find user by ID
        const user = await User.findById(decodedAccessToken.userId);
        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ message: "User not found" });
        }

        // Set user ID and access token in request object
        req.user = { id: decodedAccessToken.userId, value: accessToken };

        next();
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
    }
};

const roleAuthenticated = async (req, res, next) => {
    try {
        // Parse access_token cookie
        const accessToken = req.cookies.access_token;
        if (!accessToken) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                message: 'Access token not found'
            });
        }

        // Verify access token and get user ID
        const decodedToken = jwt.verify(accessToken, ServerConfig.JWT_KEY);
        const userId = decodedToken.userId;

        // Find user by ID and check role
        const user = await User.findById(userId);
        if (!user || user.role !== 'Admin') {
            return res.status(StatusCodes.FORBIDDEN).json({
                message: 'Access not granted'
            });
        }

        // Set user ID in request object
        req.user = { id: userId };

        next();
    } catch (err) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            message: 'Invalid access token'
        });
    }
};

module.exports={
    userAuthenticated,
    roleAuthenticated
}