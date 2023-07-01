// function sum(a,b,c){
//     return a+b+c;
// }

// let ans = sum(10,20,30);

// console.log(ans);

// function fxn(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }   
// }

// let bFxn = fxn(10);
// // console.log(bFxn);
// let cFxn = bFxn(20);

// let ans = fxn(10)(20)(30);

// console.log(ans);

// Question 1

// Multiply(2)(3)(3) => 18 , make use of function currying

// function Multiply(a){
//     return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }

// let finalAns = Multiply(2)(3)(3);
// console.log(finalAns);



// Question 2 - >

// calculate('sum')(3)(4) -> 7
// calculate('substrat')(5)(2) -> 3
// calculate('multiply')(3)(4) -> 12
// calculate('divide')(8)(4) -> 2

// function calculate(operation){
//     return function(a){
//         return function(b){
//             if(operation == "sum"){
//                 return a+b;
//             }else if(operation == "subtract"){
//                 return a-b;
//             }else if(operation == "multiply"){
//                 return a*b;
//             }else if(operation == "divide"){
//                 return a/b;
//             }else{
//                 return "Invalid Operation"
//             }
//         }
//     }
// }

// let ans = calculate("subtract")(5)(2)
// console.log(ans);




// Question - 3

// Infinite currying

// write an add function which can add values like this

// add(2)(3)(4)(5)......()


// add(2)(3)(); -> 5
// add(5)(2)(3)() -> 10
// add(5)(5)(5)(5)(5)() -> 25


// function add(a){
//     return function(b){
//         if(b){
//             return add(a+b);
//         }else{
//             return a;
//         }
//     }
// }


// let ans = add(1)(2)(3)(4)(5)(6)(7)();
// console.log(ans);



//Partial Application  or partial application

// sum(20)(30,50) -> 100

function sum(a){
    return function(b,c){
        return a+b+c;
    }
}

// let ans = sum(20)(30,50);
let fxn = sum(100);
let gxn = sum(50);
let ans = fxn(100,500);
let ans2 = gxn(50,50);
console.log(ans);
console.log(ans2);
