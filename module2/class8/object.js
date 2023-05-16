//in js object are like key value pair

// let obj = {};
// console.log(obj);

// let person = {
//     name:"Aman",
//     age:45,
//     phone:1234567,
//     isMale:true
// }

// console.log(person);

//dot notation
// console.log(person.age);

// console.log(person.name);

//bracket notation
// let c = "age";
// console.log(person[c]);

let capAmerica = {
    name:"Steve Rogers",
    age:999999,
    friends:["Bucky","Tony","Natasha","Sam","Bruce"],
    sayHi:function(){
        console.log("Steve says Hi")
    },
    address:{
        country:"USA",
        city:{
            state:"Queen",
            pincode:12345
        }
    },
    isAvenger : false
}




// console.log(capAmerica.age);
// console.log(capAmerica["age"]);

// console.log(capAmerica.friends[0]);
// console.log(capAmerica["friends"][0]);

//console.log(capAmerica.address.city.state)
// console.log(capAmerica["address"]["city"]["state"]);

// console.log(capAmerica);

// //update an existing value;
// capAmerica.isAvenger = true;

// console.log(capAmerica)

// // add an key value pair to capAmerica object
// capAmerica.movies = ["First Avenger","End Game","Civil war"]
// console.log(capAmerica)

// //delete an existing key value pair
// delete capAmerica.age;
// console.log(capAmerica);

// console.log(capAmerica.sayHi);

capAmerica.sayHi();