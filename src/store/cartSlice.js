const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
const cartSlice = createSlice({
  //directly mutate the state because the createskice method
  name: "cart",
  initialState,
  reducers: {
    // pure functions --> no side effects .. dont change info outside the function
    add(state, action) {
      state.push(action.payload);
    }, // reducers are just functions which are used mutate states
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
