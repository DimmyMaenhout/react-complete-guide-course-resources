import TableHeader from "./TableHeader";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function ResultsTable(props) {
  return (
    <table className="result">
      <TableHeader />
      <tbody>
        {props.results.map((item) => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.savingsEndOfYear)}</td>
            <td>{formatter.format(item.yearlyInterest)}</td>
            <td>
              {formatter.format(
                item.savingsEndOfYear -
                  props.initialInvestment -
                  item.yearlyContribution * item.year
              )}
            </td>
            <td>
              {formatter.format(
                props.initialInvestment + item.yearlyContribution * item.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
