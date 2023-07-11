import { useEffect, useState } from "react"

export default function Ue(){
    let [count,setCount] = useState(0);
    let [text,setText] = useState("");
    let [age,setAge] = useState(0);

    let handleChange = (e)=>{
        setText(e.target.value)
    }
    
    let handleAge = (e)=>{
        setAge(e.target.value)
    }

    let handleButton = ()=>{
        setCount(count+1);
    }

    // useEffect(()=>{
    //     console.log("inside useEffect")
    //     document.title = `Value of count is ${count} `
    // }) // it will run in mounting as well as updation phase.


    // useEffect(()=>{
    //     console.log("inside useEffect")
    //     document.title = `Value of count is ${count} `
    // },[]) //empty dependency -> it is making sure that cb we have run only on mounting phase or only once at the start;


    useEffect(()=>{
        console.log("inside useEffect")
        document.title = `Value of count is ${count} `
    },[count]) //whenever count state is changed run the cb + on mounting.

    useEffect(()=>{
        console.log("Form has been updated");
    },[text,age]) //it will run either text or age gets updated + on mounting
    
    console.log("Inside component");


    return(
        <div>
            <h1>This is my {count} </h1>
            <button onClick={handleButton}>Increment count</button>
            <input type="text" onChange={handleChange} value={text}/>
            <h2>{text}</h2>
            <input type="number" onChange={handleAge} value={age} />
        </div>
    )
}