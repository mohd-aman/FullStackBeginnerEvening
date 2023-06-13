"use strict";

// console.log(this);    //   empty object

// function fxn(){
//     console.log(this);   // undefined
// }

// fxn();

// function fxn(){
//     function gxn(){
//         console.log(this);     //undefined
//     }
//     gxn();
// }

// fxn();

let obj = {
    name:"Akash",
    age:"no idea",
    sayHello:function(){
        console.log(this);
        // function gxn(){
        //     console.log(this);
        // }
        // gxn();
    }
}

// obj.sayHello();   // object itself as we are calling it through obj

// let sayHello1 = obj.sayHello;
// sayHello1();   //udefined as it is direct invocation