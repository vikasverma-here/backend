const express = require('express');
const app = express()
const path = require('path')
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set('view engine ',"ejs")
app.use(express.static(path.join(__dirname,'public')))
app.get("/",(req,res)=>{
 res.render("index.ejs")
})

app.get('/user/:id/:age', (req, res) => {
    const userId = req.params.id;

    const age = parseInt(req.params.age) ;
    if(isNaN(age)){
        return res.status(400).send('invalid age 1 please provide a number')
    }
    res.send(`User ID is: ${userId},${age}`);
});




// app.get('/user/:id/:age', (req, res) => {
//     const age = req.params.id;
//     res.send(`User ID is: ${age}`);
// });


app.listen(3000,()=>{
    console.log("server is running")

})


// console.log(__dirname)