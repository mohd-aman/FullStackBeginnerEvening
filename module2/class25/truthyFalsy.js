let a = undefined
let b = null;
let c = 0;
let d = "";
let e = NaN;

// undefined , null , 0 , '' ,NaN false - These are the Falsy Values
//  Everything other than this will be  truthy value


if(a){
    console.log("a is true");
}else{
    console.log("a is false")
}

if(b){
    console.log("b is true")
}else{
    console.log("b is false")
}

if(c){
    console.log("c is true")
}else{
    console.log("c is false")
}

if(d){
    console.log("d is true");
}else{
    console.log("d is false")
}

if(e){
    console.log("e is true");
}else{
    console.log("e is false");
}