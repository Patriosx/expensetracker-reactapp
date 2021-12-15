import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
const TransactionList = () => {
  // const context = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);
  // console.log("context", context);

  return (
    <div className="container p-2">
      <h3>History</h3>
      <hr />
      <div style={{ maxHeight: "14rem", overflow: "scroll" }}>
        <table className="table table-hover">
          <tbody>
            <tr>
              <th>#</th>
              <th>Concept</th>
              <th>Value</th>
              <th></th>
            </tr>
            {transactions.map((t, i) => {
              return <Transaction t={t} index={i} key={t.id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;
