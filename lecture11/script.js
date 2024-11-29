// !!!! total thery based related to server  and created one server USING NATIVE NODE  LATER WE USE EXPRESS FOR SERVER

const http = require("node:http")
const server = http.createServer(function(req,res){
    if(req.url === "/secretData"){
        res.end("there is no secret data here")
    }
    res.end("hellow world !")
})

server.listen(2222)