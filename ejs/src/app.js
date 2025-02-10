const express = require('express')
const app = express()

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
const userModel = require("../models/user.model")
app.get("/",(req,res)=>{
    // res.send("hellow world")
    res.render("first")
})


app.post("/create",async(req,res)=>{
console.log(req.body)
const {name,email,profileImg} = req.body

const user = await userModel.create({
    name,
    email,
    profileImg
})

    res.redirect("feed")
})

app.get("/feed",async(req,res)=>{
    const users = await userModel.find()
    // console.log(users)
    res.render("feed",{users})
})

module.exports=app