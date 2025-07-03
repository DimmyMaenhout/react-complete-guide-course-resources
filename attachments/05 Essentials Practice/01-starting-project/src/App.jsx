import UserInput from "./components/UserInput";
import InvestmentResult from "./components/InvestmentResult";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // adding the + sign converts the string to a number
      };
    });
  }

  return (
    <>
      <UserInput userInput={userInput} onChange={handleInputChange} />

      {inputIsValid ? (
        <InvestmentResult input={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than 0</p>
      )}
    </>
  );
}

export default App;
