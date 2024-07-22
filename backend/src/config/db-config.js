
const {DATABASE_URL} = require('./server-config');
// npm i mongoose to install mongoose
const mongoose=require('mongoose');
require('dotenv').config();
// from the above line all the content written inside the env file will be loaded inside the process object
const dbConnect=()=>{
    // To be able to use the DATABASE_URL from the env file that have to feed our database.js file we have to use dot env library
    // npm i dotenv 
    mongoose.connect(DATABASE_URL ,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(()=>console.log("Connection success"))
    .catch((error)=>{
        console.log("Issue in DB connection");
        console.log(error.message);
        // https://stackoverflow.com/questions/43147330/what-is-difference-between-method-process-exit1-and-process-exit0-in-node-js
        process.exit(1);
    })
}
module.exports={dbConnect:dbConnect};