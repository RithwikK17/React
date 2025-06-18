import React from "react";
import Post from "../Components/Post";

const Page5 = (props) => {
    return(
        <div className="container">
            <h2>useImperativeHandle Hook</h2>


            <button className="btn success">Write a comment</button>
            <hr />
            <Post />
        </div>
    )
}

export default Page5;