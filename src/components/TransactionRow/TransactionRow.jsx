import css from "./TransactionRow.module.css";

export default function TransactionRow({ transaction }) {
  return (
    <tr className={css.trTable}>
      <td className={css.tableElement}>{transaction.type}</td>
      <td className={css.tableElement}>{transaction.amount}</td>
      <td className={css.tableElement}>{transaction.currency}</td>
    </tr>
  );
};