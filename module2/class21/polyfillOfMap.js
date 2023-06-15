let arr = [1,2,3,4,5];
console.log(arr);

function square(ele){
    return ele*ele;
}


// let squareArr = myMap(square,arr);
// let squareArr = arr.map(square)

Array.prototype.myMap = function (cb){
    let newArr = [];
    for(let i=0;i<this.length;i++){
        newArr.push(cb(this[i]));
    }
    return newArr;
}

let squareArr = arr.myMap(square);

console.log(squareArr);

let arr2 = [2,5,6];
let cube = arr2.myMap(function(ele){
    return ele*ele*ele;
})

console.log(arr2)
console.log(cube)