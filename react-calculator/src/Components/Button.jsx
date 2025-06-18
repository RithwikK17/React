import React from "react";

export default class Button extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {val, cls, handler } = this.props
        return(
            <button className={cls} onClick={()=> handler(val)}>
                {val}
            </button>
        )
    }
}