import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../API/client";
import apiKey from "../../API/apiKey";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  status: "idle",
};

export const taskSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    // updateTask: (state,action) => {
    //   state.tasks = []
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(getTask.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.tasks = action.payload;
      state.status = "success";
    });
    builder.addCase(getTask.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.tasks = [...state.tasks, JSON.stringify(action.payload)];
    });
  },
});

export const addTask = createAsyncThunk("addTask", async (body) => {
  const { response, data } = await client.post(`/tasks`, body);
  localStorage.setItem("tasks", JSON.stringify(data.data.tasks));
  return data.data.tasks;
});
export const getApi = createAsyncThunk("getApi", async (email) => {
  const response = await apiKey(email);
  return response;
});
export const getTask = createAsyncThunk("getTask", async () => {
  const { response, data } = await client.get(`/tasks`);
  if (response.status === 200) {
    const taskList = data.data.tasks.map((item) => {
      return {
        _id: item._id,
        content: item.content,
        column: item.column,
      };
    });
    localStorage.setItem("tasks", JSON.stringify(taskList));
    return taskList;
  }
});
