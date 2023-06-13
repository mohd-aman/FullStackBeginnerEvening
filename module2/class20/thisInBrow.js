// console.log(this);               // window obj


// function fxn(){
//     console.log(this);           //window obj
// }

// fxn();

// function fxn(){
//     function gxn(){
//         console.log(this);          //window obj
//     }
//     gxn();
// }

// fxn();


let obj = {
    name:"Anuj",
    age:"don't know",
    sayHello:function(){
        // console.log(this);
        function gxn(){
            console.log(this);    // window object
        }
       gxn();
    }
}

// obj.sayHello();          //object itself

// let sayHello1 = obj.sayHello;

// sayHello1();                //window object