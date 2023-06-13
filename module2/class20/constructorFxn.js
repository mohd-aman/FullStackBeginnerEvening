// let bmwCar = {
//     name:"Bmw",
//     topSpeed:"300km/h",
//     color:"red"
// }

// let ferrariCar = {
//     name:"Ferrari",
//     topSpeed:"250km/h",
//     color:"Black"
// }

// let lamboCar = {
//     name:"Lambo",
//     topSpeed:"280km/h",
//     color:"blue"
// }


function Car(name_of_car,color_of_car,topSpeed_of_car){
    console.log(this);          //this -> {}, new object empty obj
    this.name = name_of_car;    //{name:"bmw"}
    this.color = color_of_car;  //{name:"bmw",color:"red"}
    this.topSpeed = topSpeed_of_car; // {name:"bmw",color:"red",topSpeed:"300km/h"}
    // by default returns the this obj -> {name:"bmw",color:"red",topSpeed:"300km/h"}
}

let obj1 = new Car("BMW","red","300km/h");
console.log(obj1);

let obj2 = new Car("Lambo","black","250km/h")
console.log(obj2);

let obj3 = new Car("Ferrari","blue","280km/h");
console.log(obj3);