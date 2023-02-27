import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo } from "./addTodo";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteTodo } from "./features/todo/todoSlice";
export const Todo = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch()
    

    const handleDelete = (id) => {

        dispatch(deleteTodo(id))
console.log(id)
dispatch()
    }

    const handleEdit = () => {

    } 

    return (
        <div>
            <h1>Todo List</h1>
        <AddTodo />
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}> 
                        <MdEdit onClick={() => handleEdit()} />
                            <span>{todo.text}</span>
                            <MdDelete onClick={() => handleDelete(todo.id)} />
                          
                        </li>
                    )
                })}

            </ul>
        </div>


    )
}

