import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ t, index }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = t.amount < 0 ? "-" : "+";
  return (
    <tr>
      <th
        className={t.amount < 0 ? "bg-danger" : "bg-success"}
        style={{ width: "1rem" }}
      >
        {index + 1}
      </th>
      <td>{t.desc}</td>
      <td>{sign + Math.abs(t.amount).toFixed(2) + "€"}</td>
      <th>
        <a href="#" onClick={() => deleteTransaction(t.id)}>
          <i className="material-icons">delete</i>
        </a>
      </th>
    </tr>
  );
};

export default Transaction;
