const mongoose = require("mongoose")

function connect (){
    mongoose.connect("mongodb://0.0.0.0/validation")
    .then(()=>{console.log("data base connection stablish")})
    .catch((err)=>{console.log("kuch to gadbad hui hai " + err)})
}

module.exports = connect