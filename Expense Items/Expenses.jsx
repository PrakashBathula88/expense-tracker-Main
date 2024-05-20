import React from "react";
import "../Expense Items/Expenses.css"
export default function Expenselist({ itemlist }) {
  return (
    <div className="expenses-list">
      <h3>Expenses List</h3>
      {itemlist.map((expense, index) => (
        <div key={index} className="expense-item">
          <div className="expense-details">
            <p>Amount: {expense.amount}</p>
            <p>Date: {expense.date}</p>
            <p>Paid to:{expense.paidto}</p>
            <p  >
              icons:- {expense.icons }
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
