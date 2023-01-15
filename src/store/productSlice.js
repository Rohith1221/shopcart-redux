import { act, findRenderedComponentWithType } from "react-dom/test-utils";
import axios from "axios";
const { createSlice } = require("@reduxjs/toolkit");

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "loading ",
  LOADING: "loading ",
});
const initialState = { data: [], status: STATUSES.IDLE };
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    // remove(state, action) {
    //   return state.filter((item) => item.id !== action.payload);
    // },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//thunks
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    //getSate is to get current state
    dispatch(setStatus(STATUSES.LOADING));
    // const state = getState();
    // console.log(state);
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const data = res.data;
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
