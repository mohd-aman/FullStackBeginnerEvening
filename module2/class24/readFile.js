let fs = require("fs");

// console.log("Before");

// fs.readFile("f1.txt",function(error,data){
//     if(error){
//         console.log(error)
//     }else{
//         console.log("Data of file 1 "+data)
//     }
// })

// console.log("After");

let f1Promise = fs.promises.readFile("f.txt");

// console.log(f1Promise);  Pending state

f1Promise.then(function(data){
    console.log("File 1 data : "+data)
})

f1Promise.catch(function(error){
    console.log("Error : ", error )
})