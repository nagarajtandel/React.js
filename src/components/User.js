import {useState} from "react";
const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(5); 
    useEffect(() =>{

    },[]);
 
    return(

         <div className="user-card">
            <h1>count = {count}</h1>
            <h1>count2 = {count2}</h1>

        <h2>Name: {props.name}</h2> 
        <h2>Location:Honnavar</h2>
        <h2>contact:@nagrajtandel</h2>
        </div>
    );
};
export default User;