import { useState } from "react"


export default function Controlled(){
    const [text,setText] = useState("");

    let handleChange = (e)=>{
        setText(e.target.value);
    }
    let handleClick = (e)=>{
        e.preventDefault();
        console.log(text);
    }
    return(
        <div>
            <form>
                <input value={text} type="text"  placeholder="Controlled" onChange={handleChange}/>
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}