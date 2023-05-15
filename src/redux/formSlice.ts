import { createSlice } from "@reduxjs/toolkit";

//type
import { State } from "./types";

//api
import { postDish } from "./api";

const initialState: State = {
  loading: false,
  error: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postDish.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(postDish.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(postDish.rejected, (state, action) => {
        state.loading = false;
        state.error.push(action.payload as never);
      });
  },
});

export default formSlice.reducer;
