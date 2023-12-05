import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoAppSlice = createSlice({
  name: "todoApp",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const removeTodoId = action.payload.todoId;
      state.todos = state.todos.filter((x) => x.id !== removeTodoId);
    },
    updateTodo: (state, action) => {
      const editId = action.payload.todoId;
      const updatedTodoText = action.payload.updatedText
      console.log(updatedTodoText);
    const updatedTodo = state.todos.find(x => x.id === editId)
    updatedTodo.text =updatedTodoText

    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoAppSlice.actions;

export default todoAppSlice.reducer;
