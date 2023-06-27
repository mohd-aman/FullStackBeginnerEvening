let fs = require("fs");

let f1Promise = fs.promises.readFile("f1.txt");
let f2Promise = fs.promises.readFile("f2.txt");
let f3Promise = fs.promises.readFile("f3.txt");

let allPromise = Promise.all([f1Promise,f2Promise,f3Promise]);


//with then and catch
// allPromise.then(function(arr){
//     // console.log(arr);
//     for(let i=0;i<arr.length;i++){
//         console.log(arr[i]+"");
//     }
// })

// allPromise.catch(function(error){
//     console.log(error);
// })



//with async and await
async function readAllFile(){
    try{
    let arrOfFiles = await allPromise;
    console.log(arrOfFiles);
    }catch(error){
        console.log(error);
    }
}

readAllFile();