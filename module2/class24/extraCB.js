// read serial with asyn and calling all at the same time

// function readFileAsync(file, callback) {
//   fs.readFile(file, (err, data) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, data);
//     }
//   });
// }

// function readFilesInSequence(files, callback) {
//   let completedCount = 0;
//   const results = [];

//   function handleFileRead(index, err, data) {
//     if (err) {
//       callback(err);
//     } else {
//       results[index] = data;
//       completedCount++;

//       if (completedCount === files.length) {
//         callback(null, results);
//       }
//     }
//   }

//   files.forEach((file, index) => {
//     readFileAsync(file, handleFileRead.bind(null, index));
//   });
// }

// // Example usage
// const files = ['f1.txt', 'f2.txt', 'f3.txt'];
// readFilesInSequence(files, (err, results) => {
//   if (err) {
//     console.error('Error:', err);
//   } else {
//     results.forEach((data, index) => {
//       console.log(`File ${index + 1} data -> ${data}`);
//     });
//   }
// });