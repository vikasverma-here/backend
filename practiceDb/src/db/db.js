const mongoose = require("mongoose")
function connect (){
    mongoose.connect("mongodb://0.0.0.0/node")
    .then(()=>{
        console.log("db connected succesfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}


module.exports=connect;