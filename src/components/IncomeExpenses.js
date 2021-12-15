import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const incomes = transactions
    .filter((t) => t.amount > 0)
    .map((t) => t.amount)
    .reduce((a, b) => a + b, 0);

  const calcExpenses = () => {
    let total = 0;
    transactions.forEach((t) => {
      if (t.amount < 0) total += t.amount;
    });
    return total;
  };
  const expenses = calcExpenses();

  return (
    <div className="card text-center p-2 bg-primary border-4 border-primary">
      <div className="row border bg-white">
        <div className="col">
          <h3>INCOME</h3>
          <h3 className="text-success">
            <span>{incomes.toFixed(2)}</span>€
          </h3>
        </div>
        <div className="col">
          <h3>EXPENSE</h3>
          <h3 className="text-danger">
            <span>{Math.abs(expenses).toFixed(2)}</span>€
          </h3>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
