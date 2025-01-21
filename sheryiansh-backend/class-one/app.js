const express = require("express")
const app=express()

app.get("/",(req,res)=>{
    res.send("hellow world")
    console.log(req.query)
})
app.get("/about",(req,res)=>{
    res.send("about page ")
})
app.get("/profile",(req,res)=>{
    res.send("profile page ")
})
app.get("*",(req,res)=>{
    res.send("url not found 404 pagefound  ")
})


app.listen("3000",()=>{
    console.log("server listing succesfully")
})

