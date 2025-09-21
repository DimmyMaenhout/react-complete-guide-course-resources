import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    // as we only have 1 reducer for the store we can simple just pass the "counterSlice.reducer" without the object so just reducer: counterSlice.reducer
    counter: counterReducer,
    auth: authReducer,
  },
}); // configureStore like createStore creates a store but it makes merging mulitple reducers into one reducer easier thereafter

export default store;
