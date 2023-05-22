import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./action/todo-slice";
import authSlice from "./action/auth-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    todo: todoSlice.reducer,
  },
});

export default store;
