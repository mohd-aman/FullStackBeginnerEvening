// filter -> it's a hof which will work based on a condition and it will only
//            have those value which satisfy the condition and does not change
//             the original array


let arr = [1,2,4,57,8,9,345,12,79,987];

//expected output  [2,4,8,12];

// function even(arr){
//     let filteredArr = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2 == 0){
//             filteredArr.push(arr[i])
//         }
//     }
//     return filteredArr
// }

// let filteredArr = even(arr);
// console.log(filteredArr);

let filteredArr = arr.filter(function(ele){
    return ele%2 == 0;
})

console.log(filteredArr);


//question
// const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

// let positiveTransactions = transactions.filter(function(ele){
//     return ele>0;
// })

// console.log(positiveTransactions);