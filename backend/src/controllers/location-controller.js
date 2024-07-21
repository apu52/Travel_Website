const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');
const Location = require('../models/Location');
// const InvalidTokens = require('../models/InvalidTokens');
const jwt = require('jsonwebtoken');
const { ServerConfig } = require('../config/index');
const mongoose = require('mongoose');

const createLocation = async(req,res)=>{
    try{
        const {img ,locationName ,locationMapLink ,price ,rating ,description ,climateInfo ,transportationType ,thingsToDo} = req.body;

        if(!img || !locationName || !locationMapLink || !price || !rating ){
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
                message: 'Not all necessary fields are filled',
                success: false
            });
        }
        const existingLocation = await Location.findOne({locationName:locationName.toLowerCase()});
        if(existingLocation){
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
                message: 'This trip already exists',
                success: false
                });
        }
        const newLocation = await Location.create({
            img ,locationName:locationName.toLowerCase() ,locationMapLink ,price ,rating ,description ,climateInfo ,transportationType,thingsToDo
        });
        return res.status(StatusCodes.CREATED).json({
            message: 'Location created successfully',
            success: true,
            data: newLocation
            });
    }
    catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: err.message
        });
    }
}
const getAllLocation = async(req,res)=>{
    try{
        const trips = await Location.find({});
        if(trips.length===0){
            return res.status(StatusCodes.NOT_FOUND).json({
                success:true,
                message:'No trips details found'
            })
        }
        return res.status(StatusCodes.OK).json({
            success:true,
            trips,
            message:"All Locations details found successfully"
        })
    }
    catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: err.message
        });
    }
}
const getALocation = async(req,res)=>{
    try{
        const {id} = req.params;
        console.log(id);
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid trip ID" });
        }
        const trips = await Location.find({_id:id});
        if(!trips){
            return res.status(StatusCodes.NOT_FOUND).json({
                success:true,
                message:'Particular trip details not found'
            })
        }
        return res.status(StatusCodes.OK).json({
            success:true,
            trips,
            message:"Location details founded"
        })
    }
    catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: err.message
        });
    }
}
const updateLocation =async(req,res)=>{
    try{
        const {id} = req.params;
        const {img ,locationName ,locationMapLink ,price ,rating ,description ,climateInfo ,transportationType ,thingsToDo} = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid trip ID" });
        }
        const updatedLocation = await Location.findByIdAndUpdate({_id:id},{
            img ,locationName ,locationMapLink ,price ,rating ,description ,climateInfo ,transportationType,thingsToDo
        });
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Location details were updated",
            updatedLocation
        })
    }
    catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: err.message
        });
    }
}
const deleteLocation = async (req,res)=>{
    try{
        const {id} = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "Invalid trip ID" });
        }
        const deletedLocation = await Location.findByIdAndDelete(id);
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"Location details were deleted",
            deletedLocation
        })
        }
        catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: err.message
            });
        }
}
module.exports={
    createLocation,
    getALocation,
    getAllLocation,
    updateLocation,
    deleteLocation
}