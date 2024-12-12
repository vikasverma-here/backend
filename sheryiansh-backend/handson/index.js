const express = require("express")
const app = express()
const path = require('path')
const fs = require("fs")


app.set("veiw engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));
app.get('/',(req,res)=>{
    fs.readdir(`./files`,(err,files)=>{
        // console.log(files)
        res.render("index.ejs",{files:files})
    })

})
app.get('/create',(req,res)=>{
   console.log(req.body)

})

app.listen(3000,()=>{
    console.log("server stablished.......")
})