import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

import axios from "axios";

interface State {
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  loading: false,
  error: null,
};

export const postDish = createAsyncThunk("postDish", async (data, thunkApi) => {
  const state = thunkApi.getState() as State;
  //   const country = state.news.country;
  try {
    const response = await axios.post<any>(
      `https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/`
    );
    console.log(response);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeCountryNews: (state, action) => {},
  },
  extraReducers(builder) {
    builder
      .addCase(postDish.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(postDish.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
      })
      .addCase(postDish.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectNews = (state: RootState) => state.news;
// export const { changeCountryNews } = newsSlice.actions;

// export default newsSlice.reducer;
