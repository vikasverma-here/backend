const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName:{
        type:String
    },
     email:{
        type:String,
        lowercase: true, 
        unique: true

     },
     password:{
        type:String
     }

})

const userModel = new mongoose.model('user',userSchema)

module.exports = userModel