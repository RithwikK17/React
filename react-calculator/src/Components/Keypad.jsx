import React from "react";
import Button from './Button'

export default class Keypad extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="keypad">
                {
                    this.props.keys.map((item,index)=>{
                        return(
                            <Button key={index} val={item} cls={"btn"} handler={this.props.handler}/>
                        )
                    })
                }
            </div>
        )
    }
}