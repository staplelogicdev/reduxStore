import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';




export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {

            const todo = {
                id: uuidv4(),
                text: action.payload,
            }
            state.push(todo);

        },
        deleteTodo: (state, action) => {

            const newTodoList = state.filter((task) => {
           return  task.id !== action.payload;
            })

            console.log(newTodoList)


        },


        editTodo: (state, action) => {

        }
    }

})

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;