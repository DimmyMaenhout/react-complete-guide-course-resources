"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

// because of the "use server" at the top of the file all actions in this file will be treated as Server Actions.

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error("Invalid input");

    // instead of throwing everything away with an error, we can handle it in a more elegant way. We can also return values, return response objects to be precise, it should be a serializable method so it shouldn't have any method becasue they would be lost when being sent to the client

    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);

  // when we add a new meal we need to tell NextJS to throw away it's cahce or part of it
  revalidatePath("/meals"); // this function tells NextJS to revalidate the cache that belongs to a certain route part, by default there is also a second parameter in this function which is set to "page", if we replace this with "layout" then the nested pages would also be revalidated.
  // Invalidating the cache of the entire website is also possible by doing this revalidatePath("/", "layout")
  redirect("/meals");
}
