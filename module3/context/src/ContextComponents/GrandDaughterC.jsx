import { useContext } from "react"
import { FamilyContext } from "./FamilyContext"

export default function GrandDaughterC(){

    const info = useContext(FamilyContext);
    console.log(info);
    return(
        <div className="grandDaughter">
            <h2>{info.onlyForGrandChildren()}</h2>
        </div>
    )
}