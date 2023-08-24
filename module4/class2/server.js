const express = require("express");

// console.log(express);
const app = express();

//Logger middleware 
app.use((req,res,next)=>{ // Application Level middleware
    console.log(req.method,req.ip,req.hostname,new Date());
    next();
})


//dummy Authentication middleware
const auth = (req,res,next)=>{
    console.log(req.query);
    let password = req.query.password;
    console.log(password);
    if(password == '123'){
        next();
    }else{
        res.send("You are not authorized for the requested route")
    }
}

//Built in middleware
app.use(express.static('public'));

// app.use(auth);  // app.use method invokes middlware for all the routes in app.

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/users/:username",(req,res)=>{
    // res.send('Hello World!')
    // res.send("<h1>Hello world</h1>")
    console.log(req.params);
    res.send({"type":"GET"})
})

//route level middleware works only for particluar routes
app.post("/",auth ,(req,res)=>{ //Route level middleware
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