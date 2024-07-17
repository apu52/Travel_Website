const mongoose = require('mongoose');
const tripSchema = new mongoose.Schema({
    trip_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    checkin: {
        type: Date,
        required: true
    },
    checkout: {
        type: Date,
        required: true
    },
    totalpersons:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Trip", tripSchema);
