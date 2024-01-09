import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./slices/taskSlice";
import { checkLoginSlice } from "./slices/checkLoginSlice";
import { columnSlice } from "./slices/columnSlice";

export const store = configureStore({
  reducer: {
    taskList: taskSlice.reducer,
    isLogin: checkLoginSlice.reducer,
    columnsList: columnSlice.reducer,
  },
});
