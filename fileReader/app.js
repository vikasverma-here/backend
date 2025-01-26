let express = require("express")
let app = express()

app.get("/",(req,res)=>{
    res.send("hellow world")
})


app.listen(3000,()=>{
    console.log("server is listening on port ")
})