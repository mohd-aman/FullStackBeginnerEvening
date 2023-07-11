import { useState } from "react"

export default function Form(){
    let [firstName,setFirstName] = useState("");
    let [lastName,setLastName] = useState("");

    let handleFirstNameChange = (e)=>{
        // console.log(e);
        setFirstName(e.target.value)
    }

    let handleLastNameChange = (e)=>{
        // console.log(e);
        setLastName(e.target.value);
    }

    let handleSubmit = (e)=>{
        e.preventDefault();
        console.log(firstName,lastName);
    }

    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name : </label>
                <input onChange={handleFirstNameChange} type="text" value={firstName}/>
                {/* write a input field for lastName */}
                <label>Last Name : </label>
                <input type="text" onChange={handleLastNameChange} value={lastName}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}