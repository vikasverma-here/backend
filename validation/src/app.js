const express = require("express")
const app = express()
const uservalidationRoute = require("./routes/uservalidate.routers")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/users",uservalidationRoute)
module.exports=app