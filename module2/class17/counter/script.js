let counterValue = document.querySelector("h2");
let plusBtn = document.querySelector(".incr");
let minusBtn = document.querySelector(".decr");
let input = document.querySelector("input");
let resetBtn = document.querySelector(".reset");

let incrDecrBy = 1;

input.addEventListener("change",function(){
    let value = input.value;
    if(value == ""){
        incrDecrBy = 1;
        return
    }
    incrDecrBy = parseInt(value);
    
    if(incrDecrBy<0){
        incrDecrBy  = 1;
        alert("Enter positive value")
        return
    }
})


plusBtn.addEventListener("click",function(){
    let value = parseInt(counterValue.innerText);
    // console.log(value);
    value = value + incrDecrBy;
    counterValue.innerText = value;
})


minusBtn.addEventListener("click",function(){
    let value = parseInt(counterValue.innerText);
    value = value - incrDecrBy;
    if(value<0){
        return;
    }
    counterValue.innerText = value;
})


resetBtn.addEventListener("click",function(){
    counterValue.innerText = "0";
    incrDecrBy = 1;
    input.value = "";
})