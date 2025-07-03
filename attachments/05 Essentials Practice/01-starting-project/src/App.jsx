import UserInputGroup from "./components/UserInputGroup";
import InvestmentResult from "./components/InvestmentResult";
import { useState } from "react";

function App() {
  const [investmentDetails, setInvestmentDetails] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleUserInput(event) {
    const { name, value } = event.target;

    setInvestmentDetails((prevInvestmentDetails) => {
      return {
        ...prevInvestmentDetails,
        [name]: value,
      };
    });
  }
  return (
    <>
      <UserInputGroup
        investmentDetails={investmentDetails}
        onchange={handleUserInput}
      />

      {investmentDetails.duration > 0 ? (
        <InvestmentResult {...investmentDetails} />
      ) : (
        <p className="center">Invalid duration, should be greater than 0</p>
      )}
    </>
  );
}

export default App;
