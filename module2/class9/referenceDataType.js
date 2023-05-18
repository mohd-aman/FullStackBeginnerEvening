// const a = [1,3,46,6];
// a.push(58);
// console.log(a);

//pass by value - a copy is created and no change in original value;

function fxn(num,obj){
    //num = 10, b = 10; 
    // console.log("Inside fxn --> ",num);
    obj.city = "Delhi";
    // console.log(obj);
    num = 50;
    obj = {
        name:"Ved"
    }
    console.log(obj);
    //num = 50, b = 10 --> changes are not reflected in original
    // console.log("Inside fxn --> ",num);
}

let b = 10;
let c = {
    name:"Aman"
}
fxn(b,c);
// console.log("Outside the fxn-> ",b);
console.log(c);