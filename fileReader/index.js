// Api for file reader 

// /create 
// /read/:__filename
// /update/:__filename
// /delete/:__filename

const express = require("express")
const fs = require("fs")
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hellow duniya ")
})


// file creation api 
app.post("/create",(req,res)=>{
    const {filename,fileData}  = req.body
   const filepath = "./uploads/"+filename
    fs.writeFile(filepath,fileData,(err)=>{
        if(err){
           console.log(err)
           res.send("error occured")

        }else{
            res.send("file created succesfuly")
        }
     
    })  
    // console.log(filename,fileData)
    // res.send("file created succefully")
    
})


// file reading phase 

app.get("/read/:filename",(req,res)=>{
    const filenam =req.params.filename
    const filepath = "./uploads/"+filenam

    fs.readFile(filepath,{encoding:"utf-8"},(err,data)=>{
if(err){
   res.send("error accured")
   console.log("error accured")
    
}else{

    res.send(data)
    console.log("data read sucefully")
}
         



    })
    // res.send(filenam)
})


// let build update api 
app.patch("/update/:filename", (req, res) => {
    const filename = req.params.filename;
    const fileData = req.body.fileData;
    const filepath = `./uploads/${filename}`;
    if (!fileData) return res.status(400).send("fileData is missing");
    fs.writeFile(filepath, fileData, (err) => {
        if (err) res.status(500).send("An error occurred while updating the file");
        else res.send("File updated successfully");
    });
});


// lets build delete api 

app.delete("/delete/:filename",(req,res)=>{
    const filename = req.params.filename
    const filepath = "./uploads/" + filename
    fs.unlink(filepath,(err)=>{
        if(err){
            res.send("error accured")
        }else{
            res.send("file delete succefuccly")
        }
    })
})


// lets get all files returns all file from uploads
app.get("/getAlldata",(req,res)=>{
    const filepath = "./uploads"

    fs.readdir(filepath,(err,files)=>{
        if(err){
            res.send("error accured")
        }else{
            res.send(files)
        }
    })
})

app.listen(3000,()=>{
    console.log("port is listning on port 3000")
})