"use strict"

// console.log(this);          //window object

// function fxn(){
//     console.log(this);          //undefined
// }

// fxn();

// function fxn(){
//     function gxn(){
//         console.log(this);          //undefined
//     }
//     gxn();
// }

// fxn();

let obj = {
    name:"sai",
    age:"No idea",
    sayHello:function(){
        console.log(this);
        function gxn(){
            console.log(this);
        }
        gxn();
    }
}

// obj.sayHello();

let sayHello1 = obj.sayHello;
sayHello1();