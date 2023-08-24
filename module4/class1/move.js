const path = require("path");
const fs = require("fs")



let srcPath = "/Users/interviewbit/Desktop/FullStackEvening/module4/common_modules/myDirectory/file.md";

let destDirectory = "/Users/interviewbit/Desktop/FullStackEvening/module4/common_modules/myDirectory2";

let baseNameOfFileToBeCopied = path.basename(srcPath);

// console.log(baseNameOfFileToBeCopied);

// let destPath = destDirectory + "/" + baseNameOfFileToBeCopied;
let destPath = path.join(destDirectory,baseNameOfFileToBeCopied);

// console.log(destPath);

fs.copyFileSync(srcPath,destPath);

fs.unlinkSync(srcPath);

console.log("File has been moved");

