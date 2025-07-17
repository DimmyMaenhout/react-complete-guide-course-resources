const redux = require("redux"); // we import redux this way to run it with nodejs

const counterReducer = (state = { counter: 0 }, action) => {
  // reducer function always gets 2 parameters, the current state and the action, the state should have a default value other wise you get an error saying "Cannot read properties of undefined (reading 'counter') as the first time the reducer method gets executed the state is still undefined

  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  // the default initialization action will return the unchanged state
  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  // the subscriber function doens't take any arguments
  const latestState = store.getState(); // gets the latest state snapshot
  console.log(latestState);
};

store.subscribe(counterSubscriber); // make redux aware of the subscriber function, this function should be executed when the state changes, we do this by calling th subscribe method. We point to the subscriber method but don't execute it (we don't add the "()" at the end)

store.dispatch({ type: "increment" }); // dispatch is a method that which dispatches an action, an action is a JavaScript object with a type property, which acts as an identifier. Typically you use a String here and it should be a unique String so that every distinct action leads to different things being done in the reducer

store.dispatch({ type: "decrement" });
