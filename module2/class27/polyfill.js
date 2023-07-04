let obj1 = {
    name:"Aman",
    question:"How are you?",
    
}

function sayHello(batch,strength){
    // console.log(this);
    console.log(`${this.name} says Hello and asks ${this.question}`)
    // console.log(`He takes ${batch} and the strength is ${strength}`)
}


// sayHello();
sayHello.call(obj1);
console.log(obj1);

Function.prototype.myCall = function(obj){
    // // console.log(this); // here output will be sayHello function.
    obj.fxn = this;
    // // console.log(obj);
    obj.fxn();
    delete obj.fxn;
}


sayHello.myCall(obj1);

console.log(obj1);
