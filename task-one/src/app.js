const express = require("express")
const app = express()
const userModel = require("../models/userInfo.model");
const mongoose=require("mongoose")
app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("form"); 
});

app.post("/create",async(req,res)=>{
    console.log(req.body)
    const {name,email,enrollNumber} = req.body
    // res.send("heloow")
    const user = await userModel.create({
        name,
        email,
        enrollNumber
    })

res.redirect("show")
})

app.get("/show",async(req,res)=>{
    const users = await userModel.find()
    // console.log(users)
    res.render("show",{users})
})

module.exports=app