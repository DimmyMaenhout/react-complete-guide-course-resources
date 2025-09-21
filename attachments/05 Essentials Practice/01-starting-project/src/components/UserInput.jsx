import { useState } from "react";

export default function UserInput({ name, type = "number", title, value, onChange }) {
  const [number, setNumber] = useState(0);

  function handleInputChange(event) {
    console.log(event.target);

    setNumber(event.target.value);
    onChange(event);
  }

  return (
    <div id="user-input">
      <label>{title}</label>
      <input
        name={name}
        type={type}
        placeholder={value}
        onChange={handleInputChange}
      />
    </div>
  );
}
