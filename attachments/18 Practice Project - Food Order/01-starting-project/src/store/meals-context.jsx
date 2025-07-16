import { createContext, useEffect, useState } from "react";

export const MealsContext = createContext({
  availableMeals: null,
});

export function MealscontextProvider({ children }) {
  const [availableMeals, setAvailableMeals] = useState();

  useEffect(() => {
    async function loadMeals() {
      const response = await fetch("http://localhost:3000/meals");
      const meals = await response.json();

      console.log("meals-context.jsx, loadMeals");
      console.log(response);
      console.log(meals);

      setAvailableMeals(meals);
    }

    loadMeals();
  }, []);

  const contextValue = {
    availableMeals: availableMeals,
    // cart:
  };

  return <MealsContext value={contextValue}>{children}</MealsContext>;
}
