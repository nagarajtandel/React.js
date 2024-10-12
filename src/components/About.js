import User from "./User";
import UserClass from "./UserClass";
import { Component }  from "react";

class About extends Component {
    constructor(props){
        super(props);

        console.log("parent constructor");
}    

componentDidMount(){
    console.log("parent did mount");
}

render() {
    console.log("parent render");
    return (
        <div>
        <h1>About</h1>
        <h2> This is Food Ordering App</h2>
        <UserClass/>

      </div>
    );
}
}

export default About;