//  const {fs}=require("./fs")
//  const {https}=require("./https")
// console.log(fs,https)


// !!part2 neche diye gaye sare module hai jo ki node hume dete hai default me  ============>

    const fs = require("fs")
    const https = require("https")
const crypto = require("node:crypto")

console.log("hellow world")
var a = 12
var b = 12

https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("feched data successfully" )
});





setTimeout(() => {
    console.log("settimeout function called after 5 second")
}, 5000);

// !!!!! lets block the main thread you can say forcefully execute the synchronous way or block v8 engine for some time ===>
    fs.readFileSync("./file.txt" ,"utf8",(err,data)=>{
        console.log("file data ",data)
    })
// !!! one more example  of blocking io 
// (password base key deravtive function )
crypto.pbkdf2Sync("password","salt",50000,50 ,"sha512");
console.log("first key is generated in sync of the code ")



// fs.readFile("./file.txt","utf8",(err,data)=>{
//     console.log("File data ",data)

// })


// !! Asycn module 
// (password base key deravtive function )
crypto.pbkdf2("password","salt",500000,10,"sha512",(err,key)=>{
    console.log("key generated successfully",key)
})

function mutiply(x,y){
    const result = a*b;
    return result
}
const calval = mutiply(a,b)
console.log(calval)