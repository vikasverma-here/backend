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
app.get('/file/:filename',(req,res)=>{
   fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,filedata)=>{
    console.log(filedata)
    res.render('show.ejs',{filename:req.params.filename,filedata:filedata})
   })
    
   

})
app.post('/create', (req, res) => {
    const filename = `${req.body.title.split(" ").join('')}.txt`;
    fs.writeFile(`./files/${filename}`, req.body.details, (err) => {
        if (err) {
            console.error("Error creating file:", err);
            return res.status(500).send("Error creating file");
        }
        res.redirect("/");
    });
});


app.listen(3000,()=>{
    console.log("server stablished.......")
})