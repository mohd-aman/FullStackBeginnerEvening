let arr = [1,2,3,5];
arr.push(6);
console.log(arr);

let newArr = [...arr];
newArr.pop();
console.log(newArr);

let newArr2 = [...newArr,"Newly added item"]
console.log(newArr2);

// let flag = arr.includes(5)
// console.log(flag);