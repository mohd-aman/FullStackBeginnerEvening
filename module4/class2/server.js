const express = require("express");

// console.log(express);
const app = express();

app.get("/",(req,res)=>{
    // res.send('Hello World!')
    // res.send("<h1>Hello world</h1>")
    res.send({"type":"GET"})
})

app.post("/",(req,res)=>{
    res.send({"type":"POST"})
})

app.put("/",(req,res)=>{
    res.send({"type":"PUT"})
})

app.delete("/",(req,res)=>{
    res.send({"type":"DELETE"})
})

app.listen(8080,()=>{
    console.log("Server is running at Port 8080")
})