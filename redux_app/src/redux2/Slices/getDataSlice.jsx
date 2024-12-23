import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchtodos = createAsyncThunk("fetchtodos", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
});

export const getDataSlice = createSlice({
  name: "todo",
  initialState: {
    isloading: false,
    data: null,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchtodos.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(fetchtodos.fulfilled, (state, action) => {
        state.isloading = false;
        state.data = action.payload;
      })
      .addCase(fetchtodos.rejected, (state, action) => {
        console.log("error", action.payload);
        state.isError = true;
        state.isloading = true;
      });
  },
});

export default getDataSlice.reducer;
