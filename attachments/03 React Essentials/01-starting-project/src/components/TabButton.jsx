export default function TabButton(props) {

  return (
    <li>
      <button className={props.isSelected ? "active" : undefined} onClick={props.onClick} >{props.children}</button>
    </li>
  );
}
