import logoImg from "../assets/logo.jpg";
import { use } from "react";
import { MealsContext } from "../store/meals-context";

export default function Header({ handleCartClick }) {
  const {} = use(MealsContext);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Reactfood logo" />
        <h1 id="title">ReactFood</h1>
      </div>

      <button
        className="text-button"
        onClick={handleCartClick}
      >{`Cart()`}</button>
      {/* ${} */}
    </header>
  );
}
