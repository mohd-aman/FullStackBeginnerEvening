let fs = require("fs");

let f1Promise = fs.promises.readFile("f1.txt");
let f2Promise = fs.promises.readFile("f2.txt");
let f3Promise = fs.promises.readFile("f3.txt");

let promiseRace = Promise.race([f1Promise,f2Promise,f3Promise]);

promiseRace.then(function(data){
    console.log(data)
})