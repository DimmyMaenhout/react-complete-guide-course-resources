import logoImg from "../assets/logo.jpg";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Header({ handleCartClick }) {
  const cartContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);

  const totalCartItems = cartContext.items.reduce(
    (totalNumberOfItems, item) => {
      return totalNumberOfItems + item.quantity;
    },
    0
  );

  function handleShowCart() {
    console.log("Header.jsx, handleShowCart");
    userProgressContext.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Reactfood logo" />
        <h1 id="title">ReactFood</h1>
      </div>

      <nav>
        <Button
          textOnly
          onClick={handleShowCart}
        >{`Cart (${totalCartItems})`}</Button>
      </nav>
    </header>
  );
}
