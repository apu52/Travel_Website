const { StatusCodes } = require('http-status-codes');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');
// const Trip = require('../models/Location');
const jwt = require('jsonwebtoken');
const { ServerConfig } = require('../config/index');
const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
                message: 'Not all fields are filled',
                success: false
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(StatusCodes.CONFLICT).json({
                message: 'User with the same email already exists',
                success: false
            });
        }

        let hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = await User.create({
            name: name,
            email: email,
            role: role,
            password: hashedPassword,
        });

        return res.status(StatusCodes.CREATED).json({
            message: 'User created',
            success: true,
            id: newUser._id
        });

    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: err.message
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
                message: 'Not all fields are filled',
                success: false
            });
        }

        let user = await User.findOne({ email });
        if (!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                message: 'Email or password incorrect',
                success: false
            });
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                success: false,
                message: 'Email or password incorrect',
            });
        }

        const accessToken = jwt.sign({ userId: user._id }, ServerConfig.JWT_KEY, { subject: 'accessApi', expiresIn: ServerConfig.TOKEN_EXP });

        res.cookie('access_token', accessToken, { httpOnly: true, maxAge:3600000 });
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Login successful",
            id:user._id,
        });
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: err.message
        });
    }
};

const logout = async (req,res)=>{
    try{
        res.clearCookie('access_token');
        res.status(StatusCodes.NO_CONTENT).json({
            message:"user logged out succesfully"
        })
    }
    catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: err.message
        });
    }

}


const AdminSection = async (req, res) => {
    try {
        const user = await User.findById({ _id: req.user.id });
        return res.status(StatusCodes.OK).json({
            message: "Welcome to the admin route",
            name: user.name,
            email: user.email
        });
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: err.message
        });
    }
};

const deleteAllUsers = async (req, res) => {
    try {
        const users = await User.deleteMany({});
        return res.status(StatusCodes.OK).json({
            message: "Deleted all the users"
        });
    } catch (err) { 
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = {
    signup: signup,
    login: login,
    logout:logout,
    AdminSection: AdminSection,
    deleteAllUsers: deleteAllUsers
};
 