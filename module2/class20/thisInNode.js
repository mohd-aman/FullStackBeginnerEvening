// console.log(this);       // empty object

// function fxn(){
//     console.log(this);   //global object
// }

// fxn();

// function fxn(){
//     function gxn(){
//         console.log(this);  // global object
//     }
//     gxn();
// }

// fxn();

// let obj = {
//     name:"Kamal",
//     age:"23",
//     sayHello:function(){
//         console.log(this);
//     }
// }

// obj.sayHello();         //this will refer to obj itself

// let sayHello1 = obj.sayHello;

// let sayHello1 = function(){
//     console.log(this);
// }

// sayHello1();

let anotherObj = {
    name:"Arshad",
    age:"Don't know",
    fxn:function(){
        console.log(this);
        function gxn(){
            // console.log(this);
        }
        gxn();
    }
}

anotherObj.fxn();