let fs = require("fs");

let f1Promise = fs.promises.readFile("f1.txt");
let f2Promise = fs.promises.readFile("f2.txt");
let f3Promise = fs.promises.readFile("f3.txt");

function readFileCallback(data){
    console.log("This is data "+data)
}

function handleError(error){
    console.log("Error : ",error)
}

f1Promise.then(readFileCallback)

f2Promise.then(readFileCallback)

f3Promise.then(readFileCallback)

f1Promise.catch(handleError)

f2Promise.catch(handleError)

f3Promise.catch(handleError)