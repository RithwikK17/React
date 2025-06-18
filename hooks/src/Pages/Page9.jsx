import React, {useState} from "react";
import TodoList from "../Components/TodoList";
import { createTodos } from "../Util/todos";

let todos = createTodos(); // generated todos data  50 items

function Page9(){
    const [tab,setTab] = useState('all')

    const tabHandler = (val) =>{
        setTab(val)
    }

    return(
        <div className="container">
            <div className="title">
                <h1>useMemo Hook</h1>
                <p>Performance Hooks a common way to optimize the re-rendering performance is to skip unnecessary work. </p>
                <p>useMemo hook let you cache the result of an expensive calculation</p>
            </div>
            <div className="blk">
                <button onClick={()=>tabHandler('all')} className="btn warning">All</button>
                <button onClick={()=>tabHandler('active')} className="btn success">Active</button>
                <button onClick={()=>tabHandler('completed')} className="btn danger">Completed</button>
            </div>
            <hr />

            <TodoList
                todos={todos}
                tab={tab}
            />
        </div>
    )
}

export default Page9;