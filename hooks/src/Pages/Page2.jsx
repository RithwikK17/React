import React, {useState} from "react";

// react arrow function component
const Page2 = (props) => {
    // const [state,handler] = useState(initial value)
    const [num,setNum] = useState(1)
    const [title,setTitle] = useState("this is a state variable")
    const [view,setView] = useState(false)
    const [users,setUsers] = useState(["john", "mark", "sonu"])
    const [course,setCourse] = useState({
        name: "JavaScript",
        type: "Frontend script",
        duration: 1.4
    })

    const changeVal =(val)=>{
        setNum(num + val)
    }

    console.log(`component rendered with state = ${num}`)

    return(
        <div className="container">
            <h1 className="title">useState hook</h1>

            <hr />

            <div>
                <h3>State = {num}</h3>

                <button className="btn success" onClick={() => setNum(num+1)}>+ 1</button>

                <button className="btn danger" onClick={() => changeNum(num-1)}> - 1</button>
            </div>

            <hr />

            <h3>{title}</h3>

            <hr />

            <h3>boolean = {view ? "visible":"hidden"}</h3>

            <hr />

            <ul>
                {
                    users.map((item,index)=> {
                        return <li key={index}> {item}</li>
                    })
                }
            </ul>

            <hr />
            <h4>course name = {course.name} type is {course.type} and duration is {course.duration}</h4>
        </div>
    );
}

export default Page2;