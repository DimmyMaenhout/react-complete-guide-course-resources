// import UserInput from "./UserInput";

// export default function UserInputGroup({ investmentDetails, onchange }) {
//   const { initialInvestment, annualInvestment, expectedReturn, duration } = {
//     ...investmentDetails,
//   };

//   function handleOnChange(event) {
//     console.log(event);
//     onchange(event);
//   }

//   return (
//     <div className="input-group">
//       <UserInput
//         name="initialInvestment"
//         title="INITIAL"
//         value={initialInvestment}
//         onChange={handleOnChange}
//       />
//       <UserInput
//         name="annualInvestment"
//         title="ANNUAL INVESTMEN"
//         value={annualInvestment}
//         onChange={onchange}
//       />
//       <UserInput
//         name="expectedReturn"
//         title="EXPECTED RETURN"
//         value={expectedReturn}
//         onChange={onchange}
//       />
//       <UserInput
//         name="duration"
//         title="DURATION"
//         value={duration}
//         onChange={onchange}
//       />
//     </div>
//   );
// }
