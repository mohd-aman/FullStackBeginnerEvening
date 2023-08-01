import Child from "./Child";

export default function Parent({info}){
    return(

        <div className="parent">
            <h1>{info.onlyForParents()}</h1>
            <Child info={info}/>
        </div>
    )
}