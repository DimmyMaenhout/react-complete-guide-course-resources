import { useSelector, useDispatch, connect } from "react-redux";
import { Component } from "react";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch(); // this gives us back a dispatch function which we can execute against our Redux store, in this case "increment" & "decrement"
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // const incrementHandler = () => {
  //   dispatch({ type: "increment" });
  // };

  // const increaseHandler = () => {
  //   dispatch({ type: "increase", amount: 5 });
  // };

  // const decrementHandler = () => {
  //   dispatch({ type: "decrement" });
  // };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  // example using Redux Toolkit

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase({ amount: 5 })); // we can also just pass a value like 5. Redux Toolkit will make an object like this when just passing a value: { type: SOME_UNIQUE_IDENTIER, payload: 5 }. In this case we can still use action.amount in the store (index.js) otherwise we would have to call action.payload in that file
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// Example with class component

// class Counter extends Component {

//   incrementHandler() {
//     this.props.incrememt();
//   }

//   decrementHandler() {
//     this.props.decrememt();
//   }

//   toggleCounterHandler() {

//   }

//   render() {
//     return <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button> {/* this in the bind function refers to the class */}
//         <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>;
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     incrememt: () => dispatch({ type: "increment" }),
//     decrememt: () => dispatch({ type: "decrement" })
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter); // This can look strange but "connect" is a so-called higher order component. We execute the connect function, it then returns a new funcion and we execute this returned function as well and to this returned function we pass counter
// Why do we do it like this? Because to connect, when we execute this, we also pass something. Connect also wants some arguments, 2 arguments that are functions. The first function is a function that maps a Redux state to props which will be received in this component then.
// Hence we call this function mapStateToProps. This is a function which receives the Redux state and then this returns an object where the keys will be available as props in the receiving component (in this case the Counter component)
// The second argument is antoher function which is typically called mapDispatchToProps now the idea is to store dispatch functions to props
// When using  "connect", react Redux will still setup a subscription and manage a subscription for you, it's an alternative to the hooks "useDispatch" and "useSelector"
