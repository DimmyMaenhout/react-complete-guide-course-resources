import logoImg from "../assets/logo.jpg";
import { useContext } from "react";
import CartContext from "../store/CartContext";
import Button from "./UI/Button";

export default function Header({ handleCartClick }) {
  const cartContext = useContext(CartContext);

  const totalCartItems = cartContext.items.reduce(
    (totalNumberOfItems, item) => {
      return totalNumberOfItems + item.quantity;
    },
    0
  );
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Reactfood logo" />
        <h1 id="title">ReactFood</h1>
      </div>

      <nav>
        <Button textOnly>{`Cart (${totalCartItems})`}</Button>
      </nav>
    </header>
  );
}
