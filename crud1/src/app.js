const express = require("express")
const userModel = require("../models/user.model")
const app = express()
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("lets perfoorm the crrud operation in db")

})

app.post("/create", async (req,res)=>{
    const {userName,email,password}=req.body
    const user = await userModel.create({
        email,
        userName,
        password
    })
    res.send(user)
})

app.get("/users",async (req,res)=>{
    const users = await userModel.find()
    res.send(users)

})

app.get("/oneUser", async (req, res) => {
    const email = req.query.email?.toLowerCase(); 
    const user = await userModel.findOne({ email });
    res.json(user);
});



module.exports=app;