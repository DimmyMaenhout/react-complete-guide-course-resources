import InvestmentResultRow from "./InvestmentResultRow";
import { calculateInvestmentResults } from "../util/investment";

export default function InvestmentResult({ input }) {
  const results = calculateInvestmentResults({
    initialInvestment: input.initialInvestment,
    annualInvestment: input.annualInvestment,
    expectedReturn: input.expectedReturn,
    duration: input.duration,
  });

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

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
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;


            const totalAmountInvested = result.valueEndOfYear - totalInterest;
          return (
            <InvestmentResultRow
              year={result.year}
              investmentValue={result.valueEndOfYear}
              interest={result.interest}
              totalInterest={totalInterest}
              investedCapital={totalAmountInvested}
            />
          );
        })}
      </tbody>
    </table>
  );
}
