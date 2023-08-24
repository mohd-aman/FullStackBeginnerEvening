const fs = require("fs");

// console.log(fs);

//Read, Write and update and delete a file using fs module


// fs.writeFileSync("file1.txt","Hey, I am data of file one ");

// let contentOfFileOne = fs.readFileSync("file1.txt");

// console.log(contentOfFileOne+"");

// let contentOfFileTwo = fs.readFileSync("file2.txt");
// console.log(contentOfFileTwo+"");

// fs.appendFileSync("file1.txt","want to add some more data");

// fs.unlinkSync("file2.txt");



//check if file or directory exist

let doesExist = fs.existsSync("myDirectory2");
console.log(doesExist);

//create and delete a directory(Folder)

if(!fs.existsSync("myDirectory"))
    fs.mkdirSync("myDirectory");

if(!fs.existsSync("myDirectory2"))
    fs.mkdirSync("myDirectory2");

// if(fs.existsSync("myDirectory"))
//     fs.rmdirSync("myDirectory");





