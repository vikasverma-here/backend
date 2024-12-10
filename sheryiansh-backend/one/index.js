const fs = require("fs")
fs.writeFile("hey.txt","hey hellow kaise ho " ,(err)=>{
    if(err) console.error(err)
        else console.log("done")
})




fs.appendFile("hey.txt","mai to accha hu  " ,(err)=>{
    if(err) console.error(err)
        else console.log("done")
})



fs.rename("hey.txt","./copy/hellow.txt" ,(err)=>{
    if(err) console.error(err)
        else console.log("done")
})



fs.unlink("./copy/delete.txt",(err)=>{
    if(err) console.error(err)
        else console.log("done")
})



fs.rmdir("./re",(err)=>{
    if(err) console.error(err)
        else console.log("done")
})


fs.mkdir("./remove",(err)=>{
    if(err) console.error(err)
        else console.log("done")
})


const http = require("http")

const server = http.createServer((req,res)=>{
    res.end("hellow dosto ")
})

server.listen(3000)
