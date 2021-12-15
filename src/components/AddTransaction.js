import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [transaction, setTransaction] = useState({
    id: "",
    desc: "",
    amount: 0,
  });

  const handleInputChange = (e) => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddTransaction = (e) => {
    e.preventDefault();
    console.log("transaction obj", transaction);
    const newTransaction = {
      id: Date.now() + Math.trunc(Math.random() * 99),
      desc: transaction.desc,
      amount: +transaction.amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div className="container my-4">
      <h3>Add new transaction</h3>
      <form action="">
        <div className="input-group">
          <div className="form-control">
            <div className="input-group">
              <span htmlFor="desc" className="input-group-text">
                Text
              </span>
              <input
                type="text"
                name="desc"
                className="form-control"
                placeholder="enter text..."
                onChange={handleInputChange}
                value={transaction.desc}
              />
            </div>
            <div className="input-group">
              <span htmlFor="amount" className="input-group-text">
                Amount
              </span>
              <input
                type="number"
                name="amount"
                className="form-control"
                placeholder="enter amount..."
                title="(negative - expense, positive - income)"
                onChange={handleInputChange}
                value={transaction.amount}
                required
              />
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleAddTransaction}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
