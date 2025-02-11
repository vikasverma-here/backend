const app = require("./src/app")
const connect = require("./db/db")

connect()
app.listen(3000,()=>{
    console.log("server sun rha hai 3000 port pe ")
})