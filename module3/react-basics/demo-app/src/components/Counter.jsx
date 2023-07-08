import { useState } from "react";

export default function Counter(){

    let [count,setCount] = useState(0)  //it's a hook 
    
    // let count = 0;

    function handleIncrement(){
        console.log("plus button clicked");
        setCount(count+1);
        console.log(count);
    }

    function handleDecrement(){
        console.log("minus button clicked");
        setCount(count-1);
        console.log(count);
    }
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}