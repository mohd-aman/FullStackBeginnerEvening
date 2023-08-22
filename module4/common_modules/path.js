const path = require("path");

// console.log(path);
// "/Users/interviewbit/Desktop/FullStackEvening/module3/spread.js"

let extName = path.extname("/Users/interviewbit/Desktop/FullStackEvening/module3/spread.js");

console.log(extName);

let baseName = path.basename("/Users/interviewbit/Desktop/FullStackEvening/module3/spread.js");

console.log(baseName);

console.log(__dirname); // current directory 
// console.log(__dirname);

console.log(__filename); // current file path