const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({   
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['Admin','Customer'],
        default:'Customer',
        required:true
    },
    booking: [{type:mongoose.Schema.Types.ObjectId,ref:'Trip',required:true}]
})
module.exports=mongoose.model("User",userSchema);
 