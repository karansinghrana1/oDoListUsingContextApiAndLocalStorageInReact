import { createContext,useContext } from "react";

export const TodoContext =createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false
        }
    ],
    addToDo:(todo)=>{},
    updateToDo:(id,todo)=>{},
    deleteToDo:(id)=>{},
    toggleComplete:(id)=>{}
})




export const useToDo = ()=>{
    return useContext(TodoContext)
}

export const ToDoProvider = TodoContext.Provider