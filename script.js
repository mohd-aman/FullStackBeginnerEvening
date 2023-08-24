// function PassByValuePrimitiveDataType(num) {
//     console.log(num) ;
//     num = 50;
//     console.log(num);
// }
// let y = 10; 
// PassByValuePrimitiveDataType(y);
// console.log(y);

let person = {
    "name":"Aman",
    "address":"Delhi"
}

function PassByValueRefeDataType(obj) {
    obj = {};
    obj.city = "pune";
    obj.name = "pravin";
    console.log(obj);
}
 PassByValueRefeDataType(person);
 console.log(person);