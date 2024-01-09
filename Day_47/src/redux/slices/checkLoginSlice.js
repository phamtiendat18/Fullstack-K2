import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkLogin: false,
};
export const checkLoginSlice = createSlice({
  name: "checkLogin",
  initialState,
  reducers: {
    updateLogin: (state, action) => {
      state.checkLogin = action.payload;
    },
  },
});
