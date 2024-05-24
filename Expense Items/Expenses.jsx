
import { useDispatch } from "react-redux";
import "../Expense Items/Expenses.css"
import { Addcart } from "../Components/Auth/Auth";

const Expenselist = ({ itemlist, onremove, onedit }) => {
  const dispatch = useDispatch();

  const submiting = (expense) => {
    dispatch(Addcart(expense));
    alert("Added to the Cart");
  };

  return (
    <div className="expenses-table-container">
      <h3>Expenses List</h3>
      <table className="expenses-table">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Date</th>
            <th>Paid To</th>
            <th>Icon</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {itemlist.map((expense) => (
            <tr key={expense.id} className="expense-item">
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td>{expense.paidto}</td>
              <td>{expense.icons}</td>
              <td>
                <button onClick={() => onedit(expense)} className="edit-button">Edit</button>
                <button onClick={() => onremove(expense.id)} className="delete-button">Delete</button>
                <button onClick={()=>{submiting(expense)}} className="cart-button">Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Expenselist;
