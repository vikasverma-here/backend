// hum yh pe require ka use karke dusre module ko import kar sakte hai our pahle require wala code chalega 

require("./require.js")
// const obj    = require("./sum.js");
const {cal,x,y}    = require("./sum.js");
console.log("ye code isi file ka hai `")
let a=10;
let b=10;
// obj.cal(a,b)
// console.log(obj.x)
// console.log(obj.y)

cal(a,b)
console.log(x)
console.log(y)


// !!! json data 
const data = require("./data.json")
console.log(data)

