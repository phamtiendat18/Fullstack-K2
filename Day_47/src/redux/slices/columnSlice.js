import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../API/client";

const initialState = {
  columns: JSON.parse(localStorage.getItem("columns")) || [],
};

export const columnSlice = createSlice({
  name: "columnSlice",
  initialState,
  reducers: {
    addColumn: (state, action) => {
      state.columns = [...state.columns, action.payload];
    },
    updateColumn: (state, action) => {
      state.columns = action.payload;
      localStorage.setItem("columns", JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getColumn.fulfilled, (state, action) => {
      state.columns = action.payload;
    });
  },
});

export const getColumn = createAsyncThunk("getColumn", async () => {
  const { response, data } = await client.get(`/tasks`);
  if (response.status === 200) {
    const columnList = data.data.columns.map((item) => {
      return { _id: item._id, title: item.column, columnName: item.columnName };
    });
    localStorage.setItem("columns", JSON.stringify(columnList));
    return columnList;
  }
});
