
function parent(){
    var a = 10;
    function child(){
        console.log(a);
    }
    return child;
}

let fxn = parent();

// console.log(fxn);
// fxn = function child(){
//     console.log(a);
// }

fxn(); 
