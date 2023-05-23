import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: !!localStorage.getItem("username"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLogin(state, action) {
      state.isLoggedIn = action.payload;
    },
    isLogout(state, action) {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("key");
      state.isLoggedIn = action.payload;
    },
  },
});

export const { isLogin, isLogout } = authSlice.actions;

export default authSlice;
