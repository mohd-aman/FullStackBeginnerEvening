const express = require("express");
const productRouter = require("./routes/productRoutes");

const app = express();
const PORT = 8080

app.use(express.json()) // parses incoming requests with JSON payloads.

app.use('/products',productRouter.router);
//get -> Read


app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})

