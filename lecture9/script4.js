const fs = require("fs")

setImmediate(()=>console.log("setImmideate"))

setTimeout(()=>console.log("setTimeout"))

Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt","utf8",()=>{
    console.log("file reading cb")
})

process.nextTick(()=>{
    process.nextTick(()=>console.log("inner nextTick"))
    console.log("nextTick")
})

console.log("last line of the code ")