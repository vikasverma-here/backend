const mongoose =require("mongoose")

function dbConnection(){
    return mongoose.connect("mongodb://127.0.0.1:27017/userDetails")
    .then(()=>{console.log("db is connected succesfully ")})
    .catch((err)=>{
        console.log("something went wrong ",err)
    })
}
module.exports=dbConnection