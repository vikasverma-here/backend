const mongoose =require("mongoose")

const detailsSchema = mongoose.Schema({
   name:{
    type:String
   },
   email:{
    type:String
   },
   enrollNumber:{
    type:Number
   }
})

const detailsModel = mongoose.model("detailsModel",detailsSchema)
module.exports=detailsModel