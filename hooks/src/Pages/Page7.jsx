import React from "react";
import Welcome from "../Components/Welcome";


function Page7(){
    return(
        <div className="container">
            <div className="title">
                <h3>useLayoutEffect</h3>
            </div>

            <div className="blk">
                <button className={show ? "btn danger" : "btn success"} onClick={()=> setShow(!show)}> {show ? "Remove" : "Show"} 
                </button>
            </div>

            <div className="blk">
                {show && <Welcome/>}
            </div>
        </div>
    )
}

export default Page7;