import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "loading ",
  LOADING: "loading ",
});
const initialState = { data: [], status: STATUSES.IDLE };
const productSlice = createSlice({
  name: "product",
  initialState,
  //  these are needed for redux-toolkit syntax of redux async programming
  extraReducers: (builder) => {
    builder
      //creating 3 actions for async thunk .. ie pending ,fullfiled , rejected
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export default productSlice.reducer;

//thunks

// this redux-toolkit syntax
// product/fetch is identifier
export const fetchProducts = createAsyncThunk("product/fetch", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  const data = res.data;
  return data;
});
