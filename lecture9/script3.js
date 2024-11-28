  const fs = require("fs")

  setImmediate(()=>console.log("setimmediate"));  

  setTimeout(() => {
    console.log("Time expired")
  }, 0);


  Promise.resolve("promise").then(console.log)


  fs.readFile("./file.txt","utf8",()=>{

    setTimeout(() => {
        console.log("2nd timer`")
    }, 0);

    process.nextTick(()=>console.log("2nd nextTick"))

    setImmediate(()=>console.log(" 2nd  setImmediate")
)
    console.log("file reading cb")
  })


  process.nextTick(()=>console.log(" nextTicck"))

  console.log("last line of the code ")