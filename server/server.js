const { log } = require('console');
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write("<h1>I am happy to learn full stack web development from PW Skills</h1>")
    }
    res.end()
})

server.listen(5005);

console.log("Http server is running successfully");
