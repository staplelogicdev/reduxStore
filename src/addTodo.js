import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "./features/todo/todoSlice";
export const AddTodo = () => {
     const [task, setTask] = useState('');
    const dispatch = useDispatch();
   

   const handleAddTodo = (e) => {
    e.preventDefault();
       dispatch(addTodo(task))
       setTask('');

    }
    return(
        <div>
            <form onSubmit={handleAddTodo}>
            <input
            placeholder="Enter todo"
            type='text'
            onChange={(e) => setTask(e.target.value)}
            />

            <button>
                AddTodo
            </button>

            </form>

        </div>
    )
}

