let a = [1,3,4,5,6];
// let b = a;

// b.push(10);
// console.log(a);
// console.log(b);

// ... -> spread operator.
// let b = [...a];

// b.push(10);
// console.log(b);
// console.log(a);

let obj = {
    name:"Anuj",
    city:"Don't Know"
}

let anotherObj = {...obj}

obj.pincode = 1334555;
console.log(obj);
console.log(anotherObj);