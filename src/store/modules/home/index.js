import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import reducers from "./reducers";
const home = createSlice({
  name: "home",
  initialState,
  reducers,
  // 异步
  extraReducers: (builder) => {
  },
});
export const { addNumber } = home.actions;
export default home.reducer;
