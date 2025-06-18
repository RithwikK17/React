import React, {useEffect, useState} from "react";
import ChatRoom from "../Components/ChatRoom";

function Page6a(){
    // general, travel, friends, family.
    const[roomId,setRoomId]=useState(`general`)
    const[view,setView]=useState(false)

    const roomHandler =(e)=>{
        if(e.target.value !=="null"){
            setRoomId(e.target.value)
        }
    }

    return(
        <div className="container">
            <h1>useEffect (Chat server)</h1>

            <div className="form-item">
                <label htmlFor="">Choose Chat room id</label>
                <select name="roomId" id="roomId" value={roomId} onChange={roomHandler} className="form-item">
                    <option value="null">Select ID</option>
                    <option>General</option>
                    <option>Travel</option>
                    <option>Friends</option>
                    <option>Family</option>
                </select>
            </div>
            <div className="blk">
                <button className={view ? "btn danger": "btn success"} onClick={()=>setView(!view)}>
                    {view? "Close Chat": " Open Chat"}
                </button>
            </div>
            <div className="blk">
                {
                    view && <ChatRoom roomId={roomId}/>
                }
            </div>
        </div>
    )
}

export default Page6a;