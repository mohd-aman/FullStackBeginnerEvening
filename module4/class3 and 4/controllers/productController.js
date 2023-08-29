const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./data.json","utf-8"));
// console.log(data);

let products = data.products;

const getAllProducts = (req,res)=>{
    res.send(products);
}

const getProduct = (req,res)=>{
    // console.log(req.params);
    let id = req.params.id
    let product = products.find((obj)=> obj.id == id);
    // [{id:1,title:iphoneX},{id:2,title:iphone11},{id:3,title:keyboard}]
    res.send(product);
}

const createProduct = (req,res)=>{
    // console.log(req.body);
    products.push(req.body);
    res.send("data added");
}

const replaceProduct = (req,res)=>{
    let id = req.params.id;
    let productIndex = products.findIndex(obj => obj.id == id);
    // products.splice(productIndex,1,{id:id, ...req.body})
    products[productIndex] = {id:id, ...req.body};
    // [{id:1,title:"kjfdlasj"},{id:2,title:"jfkd"},{id:4,title:"jkfd"}]
    res.send("data updated with put method");
}

const updateProduct = (req,res)=>{
    let id = req.params.id;
    let productIndex = products.findIndex(obj => obj.id == id);
    let product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.send("data updated with patch method")
}

const deleteProduct = (req,res)=>{
    let id = req.params.id;
    let productIndex = products.findIndex(obj => obj.id == id);
    let product = products[productIndex];
    products.splice(productIndex,1,{...product,...req.body})
    res.send("data updated with patch method")
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
}
// console.log(module);