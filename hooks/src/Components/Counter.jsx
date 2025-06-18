import React, { useEffect } from "react";

function Counter(props){
    useEffect(()=>{
        console.log(`component rendered with props = ${props.num}`)

        return()=>{
            console.log(`component unmounted`)
        }
    },[props.num])

    return(
        <div>
            <h3>Counter</h3>
            <h3>Number = {props.num}</h3>
        </div>
    )
}

export default Counter;