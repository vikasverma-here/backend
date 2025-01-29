const express = require("express")
const app = express()
const connectDB = require('./db');

const PORT = 3000;
app.use(express.json());

connectDB();


app.get("/",(req,res)=>{
    console.log("i am inside home page rooute handler ")
    res.send("hellow je kaise hai ")
})

app.listen(PORT,()=>{
    console.log("server is running")
})