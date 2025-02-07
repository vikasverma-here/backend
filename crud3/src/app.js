const express = require("express")

const userModel = require("../models/user.modole")
  const app = express()
app.use(express.json());

app.get("/",(req,res)=>{
    console.log("hellow dunigy a")
    res.send("hellow world")
})

app.post("/create", async (req,res)=>{
   const {userName,email,age} =req.body
   const user = await userModel.create({
    userName,
    email,
    age
   })

   
    res.send(user)
})


app.get("/user/userName/:userName",async(req,res)=>{
  const user = await userModel.findOne({userName:req.params.userName})
  res.send(user)
})

app.get("/user/:id",async(req,res)=>{
  const user = await userModel.findById(req.params.id)
  res.send(user)
})
app.delete("/user/delete/:id", async (req, res) => {
  const user = await userModel.findByIdAndDelete(req.params.id);
  res.send(user);
});


app.get('/allUser',async (req,res)=>{
  const users = await userModel.findById(req.params.id)
  res.send("user deleted successfully",req.params.id)
})
  module.exports=app

