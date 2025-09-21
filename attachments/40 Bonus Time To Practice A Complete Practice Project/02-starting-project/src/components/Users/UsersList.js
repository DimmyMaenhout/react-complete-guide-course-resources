import Card from "../UI/Card";
import classes from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.username}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
