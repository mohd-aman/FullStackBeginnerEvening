

export default function UserProfile(props){
    // console.log(props);
    // console.log(props.name);
    let {name,age,occupation} = props; 
    // props.name = "changed Name"  not allowed props are immutable.
    
    return(
        <div>
            <h3>Name : {name}, Age : {age
            }, Occupation : {occupation}</h3>
        </div>
    )
}