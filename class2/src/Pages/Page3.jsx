import React from "react";
import UserCard from "./Components/UserCard";

class Page3 extends Component{
    constructor(props){
        super(props)
        this.state = {
            user:{
                name: "John",
                image: "https://picsum.photos/id/45/500/500",
                email: "john@gmail.com",
                mobile: "9988776644",
                address: {
                    city: "Bengaluru",
                    pin: "560010"
                }
            }
        }
    }

    render(){
        return(
            <div>
                <h1>Props</h1>
                <UserCard userInfo = {this.state.user}/>
            </div>
        )
    }
}

export default Page3