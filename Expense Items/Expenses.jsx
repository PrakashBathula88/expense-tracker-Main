import React from "react";
import "../Expense Items/Expenses.css";

const Expenselist = ({ itemlist, onremove }) => {
  return (
    <div className="expenses-list">
      <h3>Expenses List</h3>
      {itemlist.map((expense) => (
        <div key={expense.id} className="expense-item">
          <div className="expense-details">
            <p>Amount: {expense.amount}</p>
            <p>Date: {expense.date}</p>
            <p>Paid to: {expense.paidTo}</p>
            <p>Icon: {expense.icons}</p>
            <button onClick={() => onremove(expense.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expenselist;
