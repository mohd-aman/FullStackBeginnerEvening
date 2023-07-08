
export default function MyComponent(){

    function handleClick(name){
        console.log("Button has been clicked by "+name);
    }

    return(
        <div>
            <h2>{10*20}</h2>
            <button onClick={()=>handleClick("Aman")}>Click me</button>
        </div>
    )
}