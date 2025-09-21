import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { // reducers must be pure, side-effect free, synchronous functions! input: Old State + action --> output: New State
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
