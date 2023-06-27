let fs = require("fs");

async function readFileSerially(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
        let data = await fs.promises.readFile(arr[i]);
        result.push(data+"");
    }
    // let f1Data = await fs.promises.readFile("f1.txt")
    // console.log(f1Data+"");
    // let f2Data = await fs.promises.readFile("f2.txt");
    // console.log(f2Data+"");
    // let f3Data = await fs.promises.readFile("f3.txt");
    // console.log(f3Data+"")
    // console.log(result);
    return result;
}


let result = readFileSerially(["f1.txt","f2.txt","f3.txt"]);

// console.log(result);

result.then(function(data){
    console.log(data);
})