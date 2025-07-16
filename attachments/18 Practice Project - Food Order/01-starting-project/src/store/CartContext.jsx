import { createContext, useEffect, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // ... update the state to add a meal item

    const existingCartitemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items]; // making a copy of the old items array

    if (existingCartitemIndex > -1) {
      // findIndex will return -1 if the item isn't in the list
      const existingItem = state.items[existingCartitemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      updatedItems[existingCartitemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    // ... update the state to remove an item from the state

    const existingCartitemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartitemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartitemIndex, 1); // remove the item at the index
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      updatedItems[existingCartitemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
  });

  function addItem(item) {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  }

  function removeItem(id) {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  }

  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
  };

  return <CartContext value={cartContext}>{children}</CartContext>;
}

export default CartContext;
