import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';

// react lifecycle of functional components

/* 
    useEffect(function(){},[dependancy])
    state,props => dependancy

    mount
        useEffect(function(){
            method calls
            },[])

    update
        useEffect(function(){
            method calls    
        },[dependancy])

    unmount
        useEffect(function(){
            return() => {
                }
        },[dependancy])
*/

function Page6(props){
    const [count,setCount] = useState(0) // initial state

    const incVal = (val) => {
       setCount(count+val)
    }

    useEffect(() =>{
        console.log(`component rendered with state =${count}`)
    },[count])

    return(
        <div className="container">
            <h1>useEffect Hook</h1>
            <div className="blk">
                <Counter num={count} />
                <button className="btn success" onClick={()=>incVal(1)}>Increment</button>
            </div>
        </div>
    )
}

export default Page6;