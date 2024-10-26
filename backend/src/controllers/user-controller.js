//in this versio of code i have tried to remove the redundancy from the code  and also have tried to improve the efficency to some sort 

const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { ServerConfig } = require('../config/index');

const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password) {
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: 'Not all fields are filled', success: false });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(StatusCodes.CONFLICT).json({ message: 'User with the same email already exists', success: false });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({ name, email, role, password: hashedPassword });

        return res.status(StatusCodes.CREATED).json({ message: 'User created', success: true, id: newUser._id });
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: 'Not all fields are filled', success: false });
        }

        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Email or password incorrect', success: false });
        }

        const accessToken = jwt.sign({ userId: user._id }, ServerConfig.JWT_KEY, { subject: 'accessApi', expiresIn: ServerConfig.TOKEN_EXP });

        res.cookie('access_token', accessToken, { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'strict', 
            maxAge: 3600000 
        });
        
        return res.status(StatusCodes.OK).json({ success: true, message: "Login successful", id: user._id });
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
};

const logout = async (req, res) => {
    try {
        res.clearCookie('access_token');
        return res.status(StatusCodes.NO_CONTENT).json({ message: "User logged out successfully" });
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
};

const AdminSection = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        return res.status(StatusCodes.OK).json({ message: "Welcome to the admin route", name: user.name, email: user.email });
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
};

const deleteAllUsers = async (req, res) => {
    try {
        await User.deleteMany({});
        return res.status(StatusCodes.OK).json({ message: "Deleted all the users" });
    } catch (err) { 
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: err.message });
    }
};

module.exports = { signup, login, logout, AdminSection, deleteAllUsers };
