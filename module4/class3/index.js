const mongoose = require("mongoose")

const password = 'MB1vRySNPUvjt0qN';

const db = `mongodb+srv://saifiamaan445:${password}@cluster0.closkjt.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(db)
.then(()=>{
    console.log("Connection Established")
}).catch((error)=>{
    console.log(error);
})

