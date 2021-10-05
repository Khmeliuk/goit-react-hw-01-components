import PropTypes from "prop-types";
import s from "./Transaction.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.tbName}>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>
      {items.map(({ type, amount, currency, id }) => (
        <tbody key={id} a={items.index}>
          <tr>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
