import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_API from "../../utils/BASE_API";
import STATUS from "../../utils/StatusCode";

const initialState = {
  status: null,
  todoList: localStorage.getItem("key")
    ? JSON.parse(localStorage.getItem("key"))
    : [],
};

const dataTodoAPI = createAsyncThunk("get/todo", async () => {
  try {
    const { data } = await axios.get(`${BASE_API}/todos`);

    return data;
  } catch (error) {
    throw error;
  }
});

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getData(state, action) {
      state.todoList = action.payload;
    },
    addTodo(state, action) {
      const newState = state.todoList.map((item) => item);
      newState.unshift(action.payload);

      localStorage.setItem("key", JSON.stringify(newState));
      state.todoList = newState;
    },
    removeTodo(state, action) {
      state.todoList = state.todoList.filter(
        (item) => item?.id !== action.payload
      );
    },
    updateTodo(state, action) {
      state.todoList = state.todoList.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(dataTodoAPI.pending, (state, action) => {
      state.status = STATUS.LOADING;
    });
    builder.addCase(dataTodoAPI.fulfilled, (state, action) => {
      state.todoList = action.payload;
      state.status = STATUS.IDLE;
    });
    builder.addCase(dataTodoAPI.rejected, (state, action) => {
      state.status = STATUS.ERROR;
    });
  },
});

export const { getData, removeTodo, updateTodo, addTodo } = todoSlice.actions;

export { dataTodoAPI };

export default todoSlice;
