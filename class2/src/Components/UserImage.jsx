import React, {Component} from "react";

export default class UserImage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <img src={this.props.srcUrl} alt={this.props.txt} className={this.props.class} />
        )
    }
}