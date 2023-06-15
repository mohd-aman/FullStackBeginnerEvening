let obj = {"name":"Alex","age":"50"}
console.log(obj);

// let arr = [1,23,4,5,6]

// console.log(arr);

// let isValid = obj.hasOwnProperty("name");
// console.log(isValid);

// let anotherObj = {
//     name:"Adam",
//     age: 55
// }

// console.log(anotherObj)

// function Car(carName,carColor){
//     this.name = carName;
//     this.color = carColor;
// }

// Car.prototype.sayHello = function(){
//     console.log(`Hello from ${this.name}`);
// }

// Car.prototype.hasOwnProperty = function(){
//     console.log("new fxn added to proto")
// }

// Car.prototype.brake = function(){
//     console.log(`Brake has been applied to ${this.name}`);
// }

// let car1 = new Car("BMW","Red");
// console.log(car1);
// car1.brake();

// let car2 = new Car("Lambo","Black");
// console.log(car2)

// let car3 = new Car("swift","white");
// console.log(car3)

// car1.sayHello();
// car2.sayHello();
// car3.sayHello();

// let hasColor = car1.hasOwnProperty("color");



// create a constructor function for creating objects for laptops
// which should have four properties - name , color , RAM , ScreenSize 
                //                  and a method which prints all this value


function Laptop(name,color,ram,size){
    this.name = name;
    this.color = color;
    this.ram = ram;
    this.size = size
}

Laptop.prototype.printDetails = function(){
    console.log(`Laptop is ${this.name} and color is ${this.color} consists of ${this.ram}GB RAM of ${this.size} screen size`)
}

let laptop1 = new Laptop("Mac","Silver","8","13 inches");
laptop1.printDetails();
