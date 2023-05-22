import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todoList.push(action.payload);
    },
    removeTodo(state, action) {
      state.todoList = state.todoList.filter(
        (todo) => todo?.id !== action.payload?.id
      );
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice;
