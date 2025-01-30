const mongoose = require("mongoose")

function connectDb(){
     return mongoose.connect(`mongodb://127.0.0.1:27017/userInfo`)
    .then(()=>{console.log("MongoDb connected successfully")})
    .catch((err)=>{
        console.log("mogodb connection error",err)
        process.exit(1);
    })
    
}

module.exports=connectDb;