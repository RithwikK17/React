import React from "react";
import UserImage from "./UserImage";
import Info from "./Info";

export default class UserCard extends Component {
    constructor(props){
        super(props)
    }

    render(){

        const {name , image, email, mobile, address} = this.props.userInfo
        return(
            <div className="card">
                <h3 className="name"> { name } </h3>
                <UserImage srcUrl={image} txt={"no image found"} class={"user-image"}/>
                <Info label={"email id"} msg={email} />
                <Info label={"mobile number"} msg={mobile} />
                <Info label={"city name"} msg={address?.city} />
                <Info label={"pin code"} msg={address?.pin} />
            </div>
        )
    }
} 