import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions.map((t) => t.amount).reduce((a, b) => a + b, 0);
  console.log("balance", balance);
  return (
    <div className="container">
      <h6 className="text-secondary">YOUR BALANCE</h6>
      <h2 className={balance >= 0 ? "ms-2 text-black" : "ms-2 text-danger"}>
        {balance.toFixed(2)}€
      </h2>
    </div>
  );
};

export default Balance;
