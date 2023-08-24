const http = require("http");

// console.log(http);

let data = {"name":"Aman"}

const server = http.createServer((req,res)=>{
    console.log("server has been started");
    // console.log(req);
    // console.log(res);
    // res.end("Hello world")
    // res.end("<h1>Hello World</h1>");
    // res.setHeader("Content-Type","application/json");
    res.end(JSON.stringify(data))
})

server.listen(8082);