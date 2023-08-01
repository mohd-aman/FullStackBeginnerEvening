
export default function GrandSon({info}){
    return(
        <div className="grandSon">
            <h2>{info.onlyForGrandChildren()}</h2>
        </div>
    )
}