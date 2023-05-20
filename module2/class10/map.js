//map -> map method is used when you want to do some operation with elements 
//       of your array and it will not change your original array.


let myArr = [1,2,3,5,6,8,9,10,12,24,67];

//write a fxn which return square of myArr;
//e.g result =[1,4,9,25, ......]

// function squareFxn(myArr){
//     let result =[];
//     for(let i=0;i<myArr.length;i++){
//         result.push(myArr[i]*myArr[i]);
//     }
//     return result;
// }
// console.log(squareFxn(myArr));
// function square(ele){
//     return ele*ele;
// }
// let squareArr = myArr.map(square)
// console.log(myArr);
// console.log(squareArr);


let radius = [1,3,4,7,9,11];
function areaOfCircle(r){
    return Math.PI*r*r;
}
// let area = radius.map(areaOfCircle);
// console.log(radius);
// console.log(area);

//declarative
let area = radius.map(function(ele){
    return Math.PI*ele*ele;
})

console.log(area);


// Question-

// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
// const inrtToUsd = 82;

// let conversionTransactions = transactions.map(function(ele){
//     return ele/inrtToUsd;
// })

// console.log(conversionTransactions);


// copy an array with map 
// let copyOfMyArr = myArr.map(function(ele){
//     return ele;
// })

// console.log(copyOfMyArr);