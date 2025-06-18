import React from "react";

// react function components
function Page1(props){
    return(
        <div className="container">
            <h1>React Hooks</h1>
            <ol>
                <li>State Hooks</li>
                <ul>
                    <li>useState</li>
                    <li>useReducer</li>
                </ul>
            <li>Ref Hooks</li>
                <ul>
                    <li>useRef</li>
                    <li>useImperativeHandle</li>
                </ul>
            <li>Effect Hooks</li>
                <ul>
                    <li>useEffect</li>
                    <li>useEffect (chat-server)</li>
                    <li>useLayoutEffect</li>
                    <li>useInsertionEffect</li>
                </ul>

                <li>Performance Hooks</li>
                    <ul>
                        <li>useMemo</li>
                        <li>useCallBack</li>
                    </ul>
                
                <li>Context Hooks</li>
                    <ul>
                        <li>useContext</li>
                        <li>createContext (method)</li>
                    </ul>
                
                <li>Custom Hooks</li>
            </ol>
        </div>
    );
}

export default Page1;