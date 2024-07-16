const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
    img: { 
        type: String,
        required:true
    },
    locationName: { 
        type: String, 
        required:true,
        unique:true
    },
    locationMapLink: {
         type: String,
         required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number
    },
    description:{
        type:String
    },
    climateInfo:{
        type:String
    },
    transportationType:{
        type:[String],
        enum:['TRAIN','PLANE','BUS'],
    },
    thingsToDo:{
        type:[String]
    }

});
module.exports = mongoose.model("Location", locationSchema);
