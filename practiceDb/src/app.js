const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("connecting to the data base")
})

module.exports=app;