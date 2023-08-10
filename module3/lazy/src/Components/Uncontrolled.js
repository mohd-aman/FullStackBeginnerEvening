import { useRef } from "react";


export default function Uncontrolled(){

    const inputRef = useRef(null);

    let handleClick = (e)=>{
        e.preventDefault();
        console.log(inputRef.current.value);
    }
    return(
        <div>
            <form>
                <input ref={inputRef} type="text"  placeholder="Uncontrolled" />
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}