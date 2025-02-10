
const app = require('./src/app')
const connection =require("./db/db")
connection()
app.listen(3000,()=>{
    console.log("server port 3000 pe sun rha hai ")
})