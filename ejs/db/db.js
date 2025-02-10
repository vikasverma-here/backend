

const mongoose = require("mongoose")

function connection(){
    mongoose.connect('mongodb://0.0.0.0/node-ejs')
    .then(()=>{console.log("db connected soccuessfully")})
    .catch((err)=>{console.log("something went worong",err)})
}

module.exports=connection