const express = require("express");
const productController = require("./controllers/productController");

const app = express();
const PORT = 8080

app.use(express.json()) // parses incoming requests with JSON payloads.

//get -> Read
app.get("/products",productController.getAllProducts)
app.get("/products/:id",productController.getProduct)
//POST -> Create
app.post("/products",productController.createProduct)
//Update
app.put("/products/:id",productController.replaceProduct)
app.patch("/products/:id",productController.updateProduct)
//Delete 
app.delete("/products/:id",productController.deleteProduct)


app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})

