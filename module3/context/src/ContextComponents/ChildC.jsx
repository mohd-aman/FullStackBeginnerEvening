import GrandDaughterC from "./GrandDaughterC";
import GrandSonC from "./GrandSonC";


export default function ChildC(){
    return(
        <div className="child">
            <GrandDaughterC />
            <GrandSonC />
        </div>
    )
}