import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utilities/strings";

const initialState = {
  products: [],
  loading: true,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios
      .get(`${baseUrl}/products`)
      .catch((err) => console.error(err));
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts: (state, action) => {
    //   state.products = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {});
  },
});

// export const {} = productsSlice.actions;

export default productsSlice.reducer;
