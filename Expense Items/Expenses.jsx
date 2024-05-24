import { useDispatch } from "react-redux";
import "../Expense Items/Expenses.css";
import { Addcart } from "../Components/Auth/Auth";
const Expenselist = ({ itemlist, onremove, onedit }) => {
  const dispatch = useDispatch();
 

  const submiting=()=>{
    dispatch(Addcart(itemlist));
    alert("add to the Cart")
  }
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
