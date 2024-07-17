const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');
const Location = require('../models/Location');
const Trip = require('../models/Trip');

const bookLocation = async (req,res)=>{
    try{
        const {id,checkin,checkout,totalpersons} = req.body;
        // From the middlewares
        const userId = req.user.id;
        console.log(req.user);
        // console.log(id,checkin,checkout,totalpersons,userId);
        if(!id || !userId || !checkin || !checkout || !totalpersons){
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({message:'Please provide all the required fields'});
        }
        // console.log("a");
        const location = await Location.findById({_id:id});
        if(!location){
            return res.status(StatusCodes.NOT_FOUND).json({message:'Location not found'});
        }
        // console.log("a2");
        const user = await User.findById(userId).populate('booking');
        if(!user){
            return res.status(StatusCodes.NOT_FOUND).json({message:'User not found'});
        }
        // Check if the user has already booked the Location
        let bookingFound = false;
        if(user.booking.length!=0){
            user.booking.map((b)=>{
                // console.log("trip:",b);
                if(b.trip_id.toString() === id){
                    bookingFound = true;
                }
        })
        }
        if (bookingFound) {
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({message:'You have already booked this Location'})
        }
 
        const newBooking = await Trip.create({
            trip_id:id,
            user_id:userId,
            checkin:checkin,
            checkout:checkout,
            totalpersons:totalpersons
        })
       user.booking.push(newBooking)
       await user.save();
       return res.status(StatusCodes.OK).json({message:'Location booked successfully',user,newBooking});

    }
    catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: err.message
        });
    }
}
// getPastBookings,getUpcomingBookings,getBookingDetails
module.exports = {
    bookLocation
}