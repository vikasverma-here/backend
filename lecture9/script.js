//event loop libuv havey session 

// example one  of event loop

const fs = require("fs");
const a =100;
setImmediate(()=>{console.log("setimediate")})

fs.readFile("./file.txt","utf8",()=>{
    console.log("file reading cb")

})

setTimeout(() => {
    console.log("time expired")
}, 0);

function printA(){
    console.log("a=",a)

}

printA()
console.log("last line of the file")