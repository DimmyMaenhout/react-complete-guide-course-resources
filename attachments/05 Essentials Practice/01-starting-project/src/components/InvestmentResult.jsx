import InvestmentResultRow from "./InvestmentResultRow";
import { calculateInvestmentResults } from "../util/investment";

export default function InvestmentResult({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const results = calculateInvestmentResults({
    initialInvestment: parseFloat(initialInvestment),
    annualInvestment: parseFloat(annualInvestment),
    expectedReturn: parseFloat(expectedReturn),
    duration: parseInt(duration),
  });

  console.log(results);
  

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interst (Year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          console.log(result);

          console.log("result.interest + result.investedCapital");
          console.log(typeof(result.interest));
          console.log(typeof(result.valueEndOfYear));
          console.log(result.valueEndOfYear);
          
          
          console.log(result.interest + result.investedCapital);
          return (
            <InvestmentResultRow
              year={result.year}
              investmentValue={result.interest + result.valueEndOfYear}
              interest={result.interest}
              totalInterest={result.valueEndOfYear - result.annualInvestment}
              investedCapital={result.valueEndOfYear}
            />
          );
        })}
      </tbody>
    </table>
  );
}
