import React, { useInsertionEffect } from "react";

// inside your css class insertion through custom hooks
let isInserted = new Set();

// custom hook
function useCSS(rule){
    useInsertionEffect(()=>{
        // as explained earlier, we don't recommend runtime injection of style tags, 
        // but id you have to do it, then it's important to do it in useInsertionEffect hook
        if(!isInserted.has(rule)){
            isInserted.add(rule)
            // document.head.appendChild(rule)
        }
    })
    return rule;
}

function Page8(){
    const cls = useCSS('container success')


    return(
        <div className={cls}>
            <h1>useInsertionEffect</h1>

            <p>fires before react makes changes to the DOM, 
                eg: libraries can insert dynamic css here.
            </p>
        </div>
    )
}

export default Page8;