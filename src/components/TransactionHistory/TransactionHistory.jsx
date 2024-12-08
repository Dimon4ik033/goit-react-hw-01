import css from "./TransactionHistory.module.css";
import TransactionRow from "../TransactionRow/TransactionRow"

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.trTable}>
          <th className={css.topTableElement}>Type</th>
          <th className={css.topTableElement}>Amount</th>
          <th className={css.topTableElement}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <TransactionRow key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
};
