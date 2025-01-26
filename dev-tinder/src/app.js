const express = require('express')

const app = express()


// is route ka matlab hai b url me aye na aye ye route chalega
// app.use("/ab?c",(req,res)=>{
//    res.send("hellw foorm testt")
// })


// is route ka mtlab hai ab ke bad b kitne bhi bar ho but last me c ho to rooute chalega acche se 
// app.use("/ab+c",(req,res)=>{
//    res.send("hellw foorm testt")
// })


// ye route us har condition ke liye chalega jo ab se starat hota hai out cd se end hota hai
// app.use("/ab*cd",(req,res)=>{
//    res.send("hellw foorm testt")
// })


//iss route me hum log ? me kai sari cheje optional rakh sakte hai using ()

// app.use("/a(bc)?d",(req,res)=>{
//    res.send("hellw foorm testt")
// })


// sending query params through url  & lgakar multiple query send ki ja sakti hai 
// url looks like http://localhost:3000/user?userid=2324&password=fjdkjf
// app.use("/user",(req,res)=>{
//    console.log(req.query)
//    res.send("hellw foorm testt")
// })



// agr url dynamic karna hai to is type ki url agr reccieve hoti hai to kya krana hai http://localhost:3000/user/344/vikas/vikas@99
// app.use("/user/:userid/:name/:password",(req,res)=>{
//    console.log(req.params)
//    res.send("hellw foorm testt")
// })


// app.use("/test/hello",(req,res)=>{
//    res.send("hellow this output come form /test/helloow")
// })


 
// app.get("/user",(req,res)=>{
//    res.send({name:"vikas",surname:"verma"})
// })

// app.post("/user",(req,res)=>{
//    console.log("saving data to database")
//    res.send("data saved successfully to db")
// })

// app.delete("/user",(req,res)=>{
//    res.send("user deleted successfully")
// })

// app.use("/",(req,res)=>{
//    res.send("hello from the dashbborred")
// })

 

app.listen(3000,()=>{
    console.log("server is succesfully listening on port number 3000")
});