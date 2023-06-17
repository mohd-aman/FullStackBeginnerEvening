// function Car(name,color){
//     this.name = name;
//     this.color = color;
// }

// Car.prototype.getDetail = function(){
//     console.log(`Name ${this.name} and color is ${this.color}`)
// }

// let car1 = new Car("Bmw","Red");
// let car2 = new Car("Lambo","Black");

// console.log(car1);
// console.log(car2);
// car1.getDetail();
// car2.getDetail();


let obj = {
    name:"Sai",
    age:"Don't know",
    getDetail:function(batch){
        this.batch = batch;
        console.log(this);
        console.log(`Name is ${this.name} and age is ${this.age}`)
    }
}



let anotherObj = {
    name:"Akash",
    age:"No idea",
}

let obj3 = {
    name:"Aman",
    age:44,
}

// obj.getDetail();
// anotherObj.getDetail();
// obj3.getDetail();


//obj -> getDetail:function(){
//     console.log(this);
//     console.log(`Name is ${this.name} and age is ${this.age}`)
// }

// obj.getDetail();
// obj.getDetail.call(obj3);   //now 'this' will point to obj3

// obj.getDetail.call(anotherObj) // now 'this' will point to anotherObj


obj.getDetail("Beginner Full Stack");

obj.getDetail.call(obj3, "July Full Stack Beginner");