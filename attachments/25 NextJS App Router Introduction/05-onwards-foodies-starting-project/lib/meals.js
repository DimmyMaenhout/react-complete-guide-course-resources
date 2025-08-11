import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // We normally wouldn't add this line of code but it's just an example to work with async in a react server component which can't be done in a react client component!

  return db.prepare("SELECT * FROM meals").all(); // if we were inserting/updating data we should use the .run() method instead of the .all() method which is used when we're fetching data and want to get back all the rows that are fetched by that statement. If we we're looking for a single row we could use .get() instead.
}
