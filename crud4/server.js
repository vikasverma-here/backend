const app = require("./src/app")
const connection = require("./db/db")
connection()
app.listen(3000,()=>{
    
    console.log("server is listening on port 3000...........")
    
})