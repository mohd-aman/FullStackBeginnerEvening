

// function fxn(){
//     var a = 10;
//     function gxn(){
//         console.log(a);
//     }
//     gxn();
// }

// fxn();


function parent(){
    let a = 10;
    function child(){
        function grandchild(){
            console.log(a);
        }
        grandchild();
    }
    child();
}

parent();