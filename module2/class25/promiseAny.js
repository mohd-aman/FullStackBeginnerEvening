let fs = require("fs");

let f1Promise = fs.promises.readFile("f.txt");
let f2Promise = fs.promises.readFile("f2.txt");
let f3Promise = fs.promises.readFile("f3.txt");

let anyPromise = Promise.any([f1Promise,f2Promise,f3Promise]);

anyPromise.then(function(data){
    console.log(data+"");
})