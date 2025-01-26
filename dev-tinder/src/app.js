const express = require('express')

const app = express()



// app.use("/test",(req,res)=>{
//    res.send("hellw foorm testt")
// })

// app.use("/test/hello",(req,res)=>{
//    res.send("hellow this output come form /test/helloow")
// })


 
app.get("/user",(req,res)=>{
   res.send({name:"vikas",surname:"verma"})
})

app.post("/user",(req,res)=>{
   console.log("saving data to database")
   res.send("data saved successfully to db")
})

app.delete("/user",(req,res)=>{
   res.send("user deleted successfully")
})

app.use("/",(req,res)=>{
   res.send("hello from the dashbborred")
})

 

app.listen(3000,()=>{
    console.log("server is succesfully listening on port number 3000")
});