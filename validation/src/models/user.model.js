const mongoose = require("mongoose")

const validSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    phone:{
        type:Number
    }
})

const validModel = mongoose.model("validModel",validSchema)

module.exports = validModel;