import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = "";
    },
  },
});

export const { setToken, clearToken } = adminSlice.actions;

export default adminSlice.reducer;
