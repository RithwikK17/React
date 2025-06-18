// todos
export function createTodos(){
    const todos = [];
    for(let i = 0; i < 50; i++){
        todos.push({
            id: i,
            text: "Todo " + (i+1),
            completed: Math.random() > 0.5
        });
    }
    return todos;
}

// filter todos
export function filterTodos(todos,tab){
    console.log(`[Artificially slow] filtering ${todos.length} todos for ${tab} tab...`);

    let startTime = performance.now()
    while(performance.now() - startTime < 500){
        // do nothing for 500ms
    }

    return todos.filter(val => {
        if(tab === "all"){
            return true; // all todos
        }else if(tab === "active") {
            return !val.completed; // false
        } else if(tab === "completed"){
            return val.completed; // true
        }
    })
}