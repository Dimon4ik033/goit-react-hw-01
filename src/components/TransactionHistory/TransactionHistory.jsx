import css from "./TransactionHistory.module.css";

function Stroke({ transaction }) {
  return (
    <tr className={css.trTable}>
      <td className={css.strokeTable}>{transaction.type}</td>
      <td className={css.strokeTable}>{transaction.amount}</td>
      <td className={css.strokeTable}>{transaction.currency}</td>
    </tr>
  );
};


export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.trTable}>
          <th className={css.tableTop}>Type</th>
          <th className={css.tableTop}>Amount</th>
          <th className={css.tableTop}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <Stroke key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};
