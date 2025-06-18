import React from "react"

export default class Display extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="display">
                <strong className="inp">{this.props.inp || 0}</strong>
                <strong className="out">{this.props.out || 0}</strong>
            </div>
        )
    }
}