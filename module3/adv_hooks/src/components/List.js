import { useState, useTransition } from "react"


export default function(){
    let [input,setInput] = useState("");
    let [list,setList] = useState([]);

    let [isPending, startTransition] = useTransition();

    const LIST_SIZE = 15000;
    
    let handleChange = (e)=>{
        setInput(e.target.value);

        startTransition(()=>{
            let newList = [];
            for(let i=0;i<LIST_SIZE;i++){
                newList.push(e.target.value);
            }
            setList(newList);
        })
        
    }

    return(
        <div>
            <input type="text" value={input} onChange={handleChange}/>
            <ul>
                {isPending?<div>...Loading</div>:
                 list.map((item)=>{
                   return <li>{item}</li>
                })}
            </ul>
        </div>
    )
}