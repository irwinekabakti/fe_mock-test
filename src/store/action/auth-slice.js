import { createSlice } from "@reduxjs/toolkit";
import STATUS from "../../utils/StatusCode";

const initialState = {
  isLoggedIn: !!localStorage.getItem("username"),
  // status: STATUS.IDLE,
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
      state.isLoggedIn = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(isLogin.pending, (state, action) => {
  //     state.status = action.STATUS.LOADING;
  //   });
  //   builder.addCase(isLogin.fulfilled, (state, action) => {
  //     state.status = action.STATUS.IDLE;
  //   });
  //   builder.addCase(isLogin.rejected, (state, action) => {
  //     state.status = action.STATUS.ERROR;
  //   });
  // },
});

export const { isLogin, isLogout } = authSlice.actions;

export default authSlice;
