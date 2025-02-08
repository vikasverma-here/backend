const express = require("express")
const detailsModel = require("../models/details.model")
const detailRoute = require("../routes/user.route")
const app = express()
app.use(express.json())
app.use(detailRoute)
app.get("/",(req,res)=>{
    res.send("hellow world")
})



module.exports=app