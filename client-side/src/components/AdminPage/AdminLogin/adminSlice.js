import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "adsfgsdhe",
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = adminSlice.actions;

export default adminSlice.reducer;
