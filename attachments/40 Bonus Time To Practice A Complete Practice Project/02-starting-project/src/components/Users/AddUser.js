import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErorrModal";

export default function AddUser(props) {
  const [newUser, setNewUser] = useState({ username: "", age: "" });
  const [error, setError] = useState();

  function inputChangeHandler(key, value) {
    setNewUser((prevUser) => {
      return {
        ...prevUser,
        [key]: value,
      };
    });
  }

  function addUserHandler(event) {
    event.preventDefault();

    if (
      newUser.username.trim().length === 0 ||
      newUser.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+newUser.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(newUser);
    setNewUser({ username: "", age: "" });
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <div className="input-group">
            <p>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                onChange={(event) =>
                  inputChangeHandler("username", event.target.value)
                }
                value={newUser.username}
              />
            </p>
            <p>
              <label htmlFor="age">Age (Years)</label>
              <input
                id="age"
                type="number"
                onChange={(event) =>
                  inputChangeHandler("age", event.target.value)
                }
                value={newUser.age}
              />
            </p>
          </div>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
}
