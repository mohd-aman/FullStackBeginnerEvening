import GrandDaughter from "./GrandDaughter";
import GrandSon from "./GrandSon";


export default function Child({info}){
    return(
        <div className="child">
            {info.familyName}
            <GrandDaughter info={info}/>
            <GrandSon info={info}/>
        </div>
    )
}