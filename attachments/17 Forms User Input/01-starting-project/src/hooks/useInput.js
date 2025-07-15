import { useState } from "react";

export function useInput(defaultValue, validationFunction) {
  const [enteredValue, setEnterdValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFunction(enteredValue);

  function handleInputChange(event) {
    setEnterdValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur(identifier) {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
