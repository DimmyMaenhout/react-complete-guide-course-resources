import Todo from "../models/Todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  todo: Todo;
  onRemoveTodo: () => void;
  // onDeleteTodoHandler: (id: string) => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.todo.text}
      {/* mijn oplossing hieronder */}
      {/* <button
        onClick={() => {
          props.onDeleteTodoHandler(props.todo.id);
        }}
      >
        Delete
      </button> */}
    </li>
  );
};

export default TodoItem;
