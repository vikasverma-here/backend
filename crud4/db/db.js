const mongoose = require("mongoose")

function connection(){
    mongoose.connect('mongodb://127.0.0.1:27017/details')
    .then(()=>{console.log("db connected soccuessfully")})
    .catch((err)=>{console.log("something went worong",err)})
}

module.exports=connection