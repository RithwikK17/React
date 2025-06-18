import React, { useState, useEffect } from "react";
import Chat from "./Chat";

function ChatRoom(props){
    const [serverUrl,setServerUrl] = useState('https://localhost:1234')

    useEffect(()=>{
        let connection = Chat(serverUrl, props.roomId)
        connection.connect();

        return()=>{
            connection.disconnect()
        }
    },[roomId,props.roomId])

    return(
        <div className="blk">
            <div className="form-item">
                <label htmlFor="">Server URL</label>
                <input type="text" name="serverUrl" id="serverUrl" className="form-item" value={serverUrl} onChange={(e)=> setServerUrl(e.target.value)}/>
            </div>
            <hr />
            <h1>Welcome to the {props.roomId} room... server url {serverUrl} {props.roomId}</h1>
        </div>
    )
}

export default ChatRoom;