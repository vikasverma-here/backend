const express = require('express')

const app = express()

app.get("/",(req,res)=>{
    console.log("hellow workf")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})