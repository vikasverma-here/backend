const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
       
    },
    email: {
        type: String,
        
    },
    profileImg: {
        type: String
    }
});

const userModel = mongoose.model("User", userSchema); 

module.exports = userModel;



