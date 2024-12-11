
const express = require('express');
const app = express();

app.use('/profile',(req,res,next)=>{
    console.log("kya middleware chla")
    next()
})

app.get('/', (req, res) => {
  
    res.send('Hello, World!');
});
app.get('/profile', (req, res) => {
    
    res.send('name:vikas,gender:"male" ');
});
app.get('/profile/name', (req, res) => {
    
    res.send('vikas ');
});
app.get('/about', (req, res,next) => {
   
    return next(new Error ("something went wrong "))
});
app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send("something unathical happening on website")
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
