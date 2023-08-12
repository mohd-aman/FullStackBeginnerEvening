import { useState } from "react";


export default function Login(){
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const [user,setUser] = useState("")

    let handleClick = (e)=>{

        e.preventDefault();
        setUser(userName);

    }
    return(
        <div>
            <form>
                <label style={{ margin: '20px' }}>UserName</label>
                <input type="text" placeholder="UserName"
                 value={userName} onChange={(e)=>setUserName(e.target.value)} ></input>
                <label style={{ margin: '20px' }}>Password</label>
                <input type="password" placeholder="Password"
                 value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button style={{
                    margin: '20px'
                }} onClick={handleClick} disabled = {!userName || !password}>
                    Login
                </button>

                <h3>{user}</h3>
            </form>
        </div>
    )
}