import { useContext } from "react";
import ChildC from "./ChildC";
import { FamilyContext } from "./FamilyContext";

export default function ParentC(){
   const info = useContext(FamilyContext)
    return(

        <div className="parent">
           {info.onlyForParents()}
            <ChildC/>
        </div>
    )
}