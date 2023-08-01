import { useContext } from "react"
import { FamilyContext } from "./FamilyContext"

export default function GrandSonC(){
   const info = useContext(FamilyContext)
    return(
        <div className="grandSon">
            <h2>{info.familyName}</h2>
        </div>
    )
}