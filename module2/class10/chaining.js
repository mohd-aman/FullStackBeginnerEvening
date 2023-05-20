// let result = [1,2,4,5,7,8,20].map(function(ele){return ele*ele});
// console.log(result);

// let result = [1,2,4,5,7,8,20].map(function(ele){return ele*ele})
//                              .filter(function(ele){return ele%2==0});

// output of map will be given to filter 
// [1,4,16,25,49,64,400].filter(function(ele){return ele%2==0});

// console.log(result);

let result = [1,2,4,5,7,8,20].map(function(ele){return ele*ele})
                             .filter(function(ele){return ele%2==0})
                             .reduce(function(accum,ele){return accum+ele});

console.log(result);
