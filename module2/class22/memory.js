//primitive
// let a = 10;
// let b = 20;
// b = a;   // b is equal a or assigning a's value to b, a=10,b=10
// b = 30;  // b = 30, a = 10
// console.log(a);
// console.log(b);


//reference
// let obj1 = {
//     name:"Sai"
// }

// let obj3 = {
//     name:"Saurabh"
// }

// let obj2 = obj1;

// obj2.name = "Aman";

// obj2 = obj3;

// obj3.name = "Sai"

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);



//shallow vs deep copy

//shallow copy
// let obj1 = {
//     name:"Sai",
//     address:{
//         city:"New York",
//         pincode:23435
//     }
// }

// let obj2 = {...obj1}                // shallow copy
// let obj3 = Object.assign({},obj2)   // shallow copy 

// obj2.name = "Saurabh"
// obj2.address.pincode = 123456

// obj3.address.city = "London"

// console.log(obj1);
// console.log(obj2);


//Deep copy
let obj1 = {
    name:"Sai",
    address:{
        city:"New York",
        pincode:23435
    }
}

// let strObj = JSON.stringify(obj1);
// let deepCopiedObj = JSON.parse(strObj);
let deepCopiedObj = JSON.parse(JSON.stringify(obj1));
// console.log(strObj);
// console.log(deepCopiedObj);

deepCopiedObj.address.city = "London";
console.log(obj1)
console.log(deepCopiedObj)



//Questions for practice

let obj = {
    name:"Adam",
    friends:["Alex","Tim","Carl"],
    address:{
        city:"Delhi",
        pincode:234540,
        bornPlace:{
            village:"No idea",
            pincode:353530
        }
    }
}

let obj5 = obj;

let obj7 = {...obj};

let obj8 = JSON.parse(JSON.stringify(obj));

obj8.friends = ["No one"]
obj8.address.bornPlace.village = "don't know"

obj7.address.city = "LA"
obj7.name = "Alex"

obj5.name = "Hales";
obj5.address.city = "New York"

console.log(obj);
console.log(obj5)
console.log(obj7)
console.log(obj8);