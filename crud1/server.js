const app = require("./src/app")
const connectDb = require("./db/db")

connectDb()
app.listen(2222,()=>{
    console.log("server is listenign on poort 2222.........")
})