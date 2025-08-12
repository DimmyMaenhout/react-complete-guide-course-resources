import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // We normally wouldn't add this line of code but it's just an example to work with async in a react server component which can't be done in a react client component!

  //   throw new Error("Loading meals failed"); // Only added this so we could use the error.js file as an example

  return db.prepare("SELECT * FROM meals").all(); // if we were inserting/updating data we should use the .run() method instead of the .all() method which is used when we're fetching data and want to get back all the rows that are fetched by that statement. If we we're looking for a single row we could use .get() instead.
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug); // We use this way (with the ? as a placeholder) to add dynamic values into our statements like this to defend against sql injections
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions); // remove any harmful content from those instructions with xss to call it on meal.instructions so we sanitize and clean those instructions

  const extension = meal.image.name.split(".").pop(); // we pop the last element which will be the file extension
  const fileName = `${slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `images/${fileName}`; // here we should remove the "public" segment from the path because all requests for images will be sent to the public folder automatically anyways or in other words, the content of the public folder will be served as if it were served on the root level of the server anyways and therefore public shouldn't be included here when requests for that image will be sent

  db.prepare(
    `
        INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )
    `
  ).run(meal);
}
