const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8080

const data = JSON.parse(fs.readFileSync("./data.json","utf-8"));
// console.log(data);

let products = data.products;
// console.log(products);

app.use(express.json()) // parses incoming requests with JSON payloads.


//get -> Read
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.get("/products",(req,res)=>{
    res.send(products);
})

app.get("/products/:id",(req,res)=>{
    // console.log(req.params);
    let id = req.params.id
    let product = products.find((obj)=> obj.id == id);
    // [{id:1,title:iphoneX},{id:2,title:iphone11},{id:3,title:keyboard}]
    res.send(product);
})

//POST -> Create
app.post("/products",(req,res)=>{
    // console.log(req.body);
    products.push(req.body);
    res.send("data added");
})


//Update

app.put("/products/:id",(req,res)=>{
    let id = req.params.id;
    let productIndex = products.findIndex(obj => obj.id == id);
    // products.splice(productIndex,1,{id:id, ...req.body})
    products[productIndex] = {id:id, ...req.body};
    // [{id:1,title:"kjfdlasj"},{id:2,title:"jfkd"},{id:4,title:"jkfd"}]
    res.send("data updated with put method");
})

app.patch("/products/:id",(req,res)=>{
    let id = req.params.id;
    let productIndex = products.findIndex(obj => obj.id == id);
    let product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.send("data updated with patch method")
})

//Delete 
app.delete("/products/:id",(req,res)=>{
    let id = req.params.id;
    let productIndex = products.findIndex(obj => obj.id == id)
    // console.log(productIndex);
    products.splice(productIndex,1)
    // [{id:1,title:"sabc"},{id:2,title:"bac"},{id:3,title:"jfkdla"}]
    res.send("data deleted");
})


app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})

