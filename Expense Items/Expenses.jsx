import { useSelector } from "react-redux";
import "../Expense Items/Expenses.css";

const Expenselist = ({ itemlist, onremove, onedit }) => {
  const sendingCart = useSelector((state) => state.AddToCart);

  const submiting = () => {
    fetch(
      "https://expense-tracker-app-d6619-default-rtdb.firebaseio.com/Expense.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendingCart),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert("Adding Items to the cart");
        console.log(data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="expenses-list">
      <h3>Expenses List</h3>
      {itemlist.map((expense) => (
        <div key={expense.id} className="expense-item">
          <div className="expense-details">
            <p>Amount: {expense.amount}</p>
            <p>Date: {expense.date}</p>
            <p>Paid to: {expense.paidto}</p>
            <p>Icon: {expense.icons}</p>
            <button onClick={() => onedit(expense)}>Edit</button>
            <button onClick={() => onremove(expense.id)}>Delete</button>
            <button onClick={submiting}>Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expenselist;
