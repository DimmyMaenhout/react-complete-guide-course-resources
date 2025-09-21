import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", // "cart", "checkout"
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserPogress] = useState("");

  function showCart() {
    setUserPogress("cart");
  }

  function hideCart() {
    setUserPogress("");
  }

  function showCheckout() {
    setUserPogress("checkout");
  }

  function hideCheckout() {
    setUserPogress("");
  }

  const userProgressContext = {
    progress: userProgress,
    showCart: showCart,
    hideCart: hideCart,
    showCheckout: showCheckout,
    hideCheckout: hideCheckout,
  };
  return (
    <UserProgressContext value={userProgressContext}>
      {children}
    </UserProgressContext>
  );
}

export default UserProgressContext;
