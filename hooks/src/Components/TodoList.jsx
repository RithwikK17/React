import React, {useMemo} from "react";


function TodoList(props){
     const {todos,tab} = props

    //  useMemo(callback,[dependancy])
        const visibleTodos = useMemo(()=>{

        },[])
    return(
        <div className="container">
            <p>
                <b>note: filter todos</b> are artificially slow down after Performance
            </p>
            <div className="blk">
                <ul className="List">
                    
                </ul>
            </div>
        </div>
    )
}

export default TodoList;