import { Link, Form, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>

        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>

        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          {/* By setting the type to "button" we make sure the form isn't submitted when the "Cancel" button is clicked */}
          <button>Submit</button>
          {/* "submit" is not required for the button as it's the default in a form */}
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

// The argument data is passed automatically by React Router, that's not the data of the form instead it's an object which for example has a request property with that request object that's generated and built by React Router
export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // { body: "...", author: "..."}

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return redirect("/");
}
