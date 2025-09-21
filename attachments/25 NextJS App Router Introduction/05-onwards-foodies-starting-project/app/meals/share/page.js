"use client"

import ImagePicker from "@/components/image-picker";
import classes from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";
import { useFormState } from "react-dom";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: null }); // this hook is responsible for managing the state of this page or this component which uses a form that will be submitted with help of Server Actions.

  // this will only work if the component in which we are it is not a client component!
  // If we had "use client" at the top (of this page) because we were using some client only feature we would get an error that we are not allowed to have server actions in a client component file

  // Moved the function below to the actions.js file!
  //   async function shareMeal(formData) {
  //     "use server"; // "use server" inside a function creates a so-called Server Action, which is a function that's guarenteed to execute on the server and only there

  //     const meal = {
  //       title: formData.get("title"),
  //       summary: formData.get("summary"),
  //       instructions: formData.get("instructions"),
  //       image: formData.get("image"),
  //       creator: formData.get("name"),
  //       creator_email: formData.get("email"),
  //     };

  //     console.log(meal);

  //   }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />

          {state.message && <p>{state.message}</p>}

          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
