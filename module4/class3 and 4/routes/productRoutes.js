const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/",productController.getAllProducts)
.get("/:id",productController.getProduct)
.post("/",productController.createProduct)
.put("/:id",productController.replaceProduct)
.patch("/:id",productController.updateProduct)
.delete("/:id",productController.deleteProduct)


exports.router = router;

// console.log(module.exports);
// console.log(exports);