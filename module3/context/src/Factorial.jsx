import { useMemo, useState } from "react"

export default function Factorial(){
    let [number,setNumber] = useState(1);

    let [inc,setInc] = useState(0);

    let onChange = (e)=>{
        setNumber(e.target.value)
    }

    const factorial = useMemo(()=>factorialOf(number),[number]) 

    return(
        <div>
           <span>Factorial of - </span>
           <input onChange={onChange}
            type="text" value={number}  />
            <h2>Factorial is {factorial}</h2>
            <button onClick={()=>{setInc(inc+1)}}>Re-Render</button>
        </div>
    )
}

function factorialOf(n){
    console.log("Factorial fxn called");
    return n<=0?1:n*factorialOf(n-1);
}