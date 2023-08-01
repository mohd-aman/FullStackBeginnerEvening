import Parent from "./Parent";


export default function Family(){

    const familyInfo = {
        familyName:"The Griffins",

        onlyForParents:()=>{
            return "Info for parents"
        },

        onlyForGrandChildren : ()=>{
            return "Info for GrandChildren"
        }
    }
    return(
        <div className="family">
            <Parent info={familyInfo}/>
        </div>
    )
}