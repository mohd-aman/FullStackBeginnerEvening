const express = require("express");

const app = express();
const PORT = 8080

require('dotenv').config();
const dbConfig = require('./config/dbConfig');

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})