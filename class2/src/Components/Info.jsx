import React, {Component} from "react";

export default class Info extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { msg , css} = this.props

        return(
            <p className={css}>
                <strong>{ label }</strong>
                <span> {msg} </span>
            </p>
        )
    }
}