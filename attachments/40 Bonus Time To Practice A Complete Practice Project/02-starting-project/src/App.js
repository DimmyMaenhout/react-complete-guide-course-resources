import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) => {
    console.log("App.js");
    console.log(user);

    setUsersList((prevUsersList) => {
      return [...prevUsersList, user];
    });
  };

  console.log(usersList);

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />

      <UsersList users={usersList} />
    </div>
  );
}

export default App;
