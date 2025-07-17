import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// const counterReducer = (state = initialState, action) => {
//   // We must always set all the other states when we update a piece of state
//   if (action.type === "increment") {
//     // the existing state must never be changed, instead it should always be overwritted by returning a new state object, this is because objects & arrays are reference values in JS it's easy to accidently override and change the existing state
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// example with Redux Toolkit

const counterSlice = createSlice({
  name: "counter", // name is the identifier of the slice
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      // here it seems we are allowd to mutate the state, we still must not manipulate the existing state but the good thing is when using Redux Toolkit and it's functions like createSlice we can't accidently manipulate the existing state because Redux Toolkit internally uses another package (imur) which will detect code like this and automitically clone the existing state, create a new state object, keep all the state which we are not editing and override the state we are editing in an immutable way
      state.counter++;
    },
    decrement(state) {
      // we don't need to accept the action parameter as we don't use it here
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    // as we only have 1 reducer for the store we can simple just pass the "counterSlice.reducer" without the object so just reducer: counterSlice.reducer
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
}); // configureStore like createStore creates a store but it makes merging mulitple reducers into one reducer easier thereafter

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
