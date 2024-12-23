import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };
export const getData = createSlice({
  name: "getdata",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
    removeData: (state) => {
      state.data = initialState;
    },
  },
});
export const { addData, removeData } = getData.actions;
export default getData.reducer;
