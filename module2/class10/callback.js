// function firstName(cb){
//     console.log("Ved");
//     cb();
// }

// function LastName(){
//     console.log("Prakash");
// }

// // firstName();
// // LastName();

// firstName(LastName);

function hof(cb){
    console.log("I am higher order function as i am accepting a function as a argument");
    cb();
}

function cb(){
    console.log("I am a call back function as I will be passed as argument to another function");
}

hof(cb);