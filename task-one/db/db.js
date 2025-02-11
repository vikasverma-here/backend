const mongoose = require("mongoose")

function connect (){
    mongoose.connect("mongodb://0.0.0.0/userEnrollment")
    .then(()=>{console.log("db is connected")})
    .catch((err)=>{console.log("something went wring ",err)})
}

module.exports=connect