import { CartContextProvider, MealscontextProvider } from "./store/CartContext";

import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header handleCartClick={handleCartClick} />
        <Meals />
      </CartContextProvider>
    </>
  );
}

export default App;
