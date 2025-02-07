const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName:{
        type:String
    },
    email:{
        type:String
    },
    age:{
  type:Number
    }
})

const userModel = new mongoose.model("user",userSchema)
module.exports=userModel