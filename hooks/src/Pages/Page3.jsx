import React, { useReducer } from "react";

// custom reducer
const customReducer = (state,action) =>{
    switch(action){
        case "incr":
            return{
                age: state.age + 1
            }
        case "decr":
            return{
                age: state.age - 1
            }
        case "clr":
            return{
                age: 0
            }
        default: console.error("Unknown Action")
    }
}

//local react function component
const Page3 = function(props){
    // const [state,dispatcher] = useReducer(reducer,initial_state)
    const [state, dispatch] = useReducer(customReducer, {age:20})
    return(
        <div className="container">
            <h1>useReducer</h1>

            <hr />

            <h2>User age = {state.age} years</h2>

            <hr />

            <button onClick={() => dispatch("incr")} className="btn success">Increment Age</button>
            <button onClick={() => dispatch("decr")} className="btn danger">Decrement Age</button>
            <button onClick={() => dispatch("clr")} className="btn warning">Clear Age</button>
        </div>
    );
}

export default Page3;