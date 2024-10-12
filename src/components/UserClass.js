import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

this.state = {
    userInfo:{
        name:"dummy",
        location:"default",
        avatar_url:"https://avatars.githubusercontent.com/u/172202791?v=4",
    },
};
//console.log(this.props.name+" child Constructor");
    }

   async componentDidMount(){
      //  console.log(this.props.name+"child did mount");
   const data = await fetch("https://api.github.com/users/nagarajtandel");
   const json = await data.json();
   this.setState({
    userInfo:json,
   });
   console.log(json);
    }
    render(){

       // console.log(this.props.name+"child renderr");
      const { name, location,avatar_url } = this.state.userInfo;
        return (
        <div className="user-card">
       <img src={avatar_url}/>
        <h2>Name:{name} </h2> 
        <h2>Location:{location}</h2>
        <h2>contact:@nagrajtandel</h2>
        </div>
        );
    }
}
export default UserClass;