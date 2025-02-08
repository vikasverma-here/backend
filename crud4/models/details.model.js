const mongoose =require("mongoose")

const detailsSchema = mongoose.Schema({
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

const detailsModel = mongoose.model("detailsModel",detailsSchema)
module.exports=detailsModel