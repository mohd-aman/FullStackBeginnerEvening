// function fxn(){
//     let d = 50;
//     console.log(d);
// }


// fxn();

// let a = 10;
// console.log(a);

// let b = 20;
// console.log(b);


// setTimeout(function(){
//     console.log("I am being printed inside the cb of setTimeout")
// },2000)

// function fxn(cb){
//     console.log("I am fxn");
//     cb();
// }

// function gxn(){
//     console.log("I am gxn")
// }

// fxn(gxn);




console.log("first Hello");

console.log("second Hello");

setTimeout(function cb(){
    console.log("3rd Hello");
},3000)

for(let i=0;i<1000000;i++){
    console.log(i);
}

setTimeout(function cb(){
    console.log("5th Hello");
},0)

console.log("4th Hello");
