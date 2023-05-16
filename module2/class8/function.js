// function sayHi(){
//     console.log('Hi from a function');
// }

// sayHi();

// function serveBeverage(drink,quantity){
//     console.log("Here is your "+quantity+" " + drink)
// }

// serveBeverage("Coffee",5);

// function in js is known First class citizen

//function expresssion
let sayHiExpression = function(){
    console.log("hello from function expression");
}

sayHiExpression();

let sum = function(num1,num2){
    let result = num1+num2;
    return result;
}

let c = sum(5,6);
console.log(c);

//arrow function 
let sayHi = () =>{
    console.log("Hello from arrow function")
}
sayHi();