const app =require("./src/app")
const dbconnection = require("./db/db")


app.listen("3000",()=>{
    dbconnection()
    console.log("app sun rha hai port 3000 per ")
})