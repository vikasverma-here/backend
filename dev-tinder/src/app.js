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

 



// yha pe hum log nested route dalte hai our dekhte hai kya hoga route handler ko hum log array me bhi bhej sakte hai nested route me handler ke andar hum log route handler function ek aray ke andar multiple type do route ka array our baki nested route ko aise hi ya fir sare ke sare route handler ko ek array me bhej sakte hai no problem with that 

// =======================================================>

    // nested rooute ko aise aise likh sake hia 
// app.use("/use",[route handler 1,route handler 2,route handler 3])

// app.use("/use",rh1,rh2,[rh3,rh4])

// app.use("/use",rh1,[rh2,rh3,rh4,rh5])

// ===========================================================>

// app.use("/use",[(req,res,next)=>{
//     console.log("port  is listing on 3000")
   
//     next()
//     res.send("response one is sended")
//     // next()

// },(req,res,next)=>{
//     console.log("posrt is listning on 3000")
//     next()
//     res.send("response two")

// },(req,res)=>{
//     console.log("posrt is listning on 3000")
    
//     res.send("response three")
// }])












// app.get("/user",(req,res,next)=>{
//     console.log("first response ")
    
//     // res.send("response one")
//     next()
// })
// app.get("/user",(req,res,next)=>{
//     console.log("first response ")

//     res.send("response two")
//     next()
// })

// app.use("/",(req,res,next)=>{
//     console.log("universal route ")

//     res.send("universal route")
//     next()
// })

// app.get("/use",(req,res,next)=>{
//     console.log("first route")
    
//     next()
// },(req,res,next)=>{
//     console.log("second routte")
//     next()
// },(req,res,next)=>{
//     res.send("final rorutte")
//     next()
// })


// admin/kuch bhi ke liye har bhar logic thodi likhenge ki scheck kar bhai ki authorized hai ki nahi hai islye hum log isko midle ware ke  andarr dal dete hai ki jitni bhi admin ki rquest hongi unka authorization check kar lena /admin ke lye hum auth middleware likhenge use me taki get post patch sari request wahi se handle ho hum chahe to middleware get out post is perticular type ki request ko handle ke karne ke liye likh sakte hai  



// ye hai apna midleware  for admin
app.use("/admin",(req,res,next)=>{
   let token = "saf"
   let isAdminAuthorized  = token ==="saf"
   if(!isAdminAuthorized){
    res.status(401).send("token unauthorized")
   }else{
    next()
   }
})


// ============================================================>

    // yha par apne ko har bar auth ka logic likhna pad rha th 

// app.get("/admin/getAlldata",(req,res)=>{
//     let token = "xyz"

//     const isAdminAuthorized = token === "sxyz"

//     if(isAdminAuthorized){
//         res.send("all data sent ")
//         console.log("data sent")
//     }else{
//         res.status(401).send("unauthorized token")
//     }
// })
// app.get("/admin/deleteAlldata",(req,res)=>{
//     let token = "xyz"

//     const isAdminAuthorized = token === "sxyz"

//     if(isAdminAuthorized){
//         res.send("all data sent ")
//         console.log("data sent")
//     }else{
//         res.status(401).send("unauthorized token")
//     }
// })

// ==================================================>

    // apn logo ne uper me middleware me auth ka logic likh liya hai ab apne res send karna hai baki middlware dekh lega 


app.get("/admin/getData",(req,res)=>{
    console.log("data sent ")
    res.send("data sent succesfully")
})

app.get("/admin/deleteData",(req,res)=>{
console.log("data deleted")
res.send("data deleted succesfully")
})




app.listen(3000,()=>{
    console.log("server is succesfully listening on port number 3000")
});