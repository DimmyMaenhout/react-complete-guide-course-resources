import { use } from "react";
import { MealsContext } from "../store/meals-context";
import Meal from "./Meal";

export default function Meals() {
  const { availableMeals } = use(MealsContext);

  console.log("Meals.jsx");
  console.log(availableMeals);

  return (
    <>
      {availableMeals && (
        <ul id="meals">
          {availableMeals.map((meal) => (
            <li key={meal.id}>
              <Meal meal={meal} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
