import React, { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
// import { SiBitcoincash } from "react-icons/si";
// import { LiaExchangeAltSolid } from "react-icons/lia";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { TbToolsKitchen3 } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { SiParamountplus } from "react-icons/si";
import { MdOtherHouses } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { FaArrowDownUpAcrossLine } from "react-icons/fa6";
import { MdOutlinePedalBike } from "react-icons/md";
import "../AddingExpenses/Expenses.css";
import Expenselist from "../../Expense Items/Expenses";
export default function Expenses() {
  const [amount, setamount] = useState("");
  const [date, setdate] = useState("");
  const [paidto, setpaidto] = useState("");
  const [icons, seticon] = useState("");
  const [expenses, setexpense] = useState([]);

  const submiting = (event) => {
    event.preventDefault();

    const newexpense = { amount, date, paidto, icons };

    setexpense([...expenses, newexpense]);

    setamount("");
    setdate("");
    setpaidto("");
    seticon("");
  };
  return (
    <div className="All-background-items">
      <form onSubmit={submiting}>
        <div className="All-amount-box">
          <h3>Amount Spent</h3>
          <div className="Enter-amount">
            <FaRupeeSign className="rupee" />
            <input
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
              required
            />
            <FaArrowRightFromBracket className="bracket" />
          </div>
          <div className="All-date-items">
            <div className="All-date_timings">
              <label>Date & Time</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setdate(e.target.value)}
                required
              />
            </div>
            <div className="All-date_paid">
              <label>Paid to</label>
              <input
                type="text"
                placeholder="Enter the name or place"
                value={paidto}
                onChange={(e) => setpaidto(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div
          className="aLL-icons"
          value={icons}
          onChange={(e) => seticon(e.target.value)}
          required
        >
          <p onClick={() => seticon(<FaMoneyCheckDollar />)} required>
            <FaMoneyCheckDollar className="All-iconic-stars" />
          </p>
          <p onClick={() => seticon(<IoStatsChartSharp />)} required>
            <IoStatsChartSharp className="All-iconic-sharp" />
          </p>
          <p onClick={() => seticon(<BsStars />)} required>
            <BsStars className="All-iconic-enter" />
          </p>
          <p onClick={() => seticon(<TbToolsKitchen3 />)} required>
            <TbToolsKitchen3 className="All-iconic-sood" />
          </p>
          <p onClick={() => seticon(<BsFillFuelPumpFill />)} required>
            <BsFillFuelPumpFill className="All-iconic-fuels" />
          </p>
          <p onClick={() => seticon(<MdOutlineLocalGroceryStore />)} required>
            <MdOutlineLocalGroceryStore className="All-iconic-groceries" />
          </p>
          <p onClick={() => seticon(<GiHealthNormal />)} required>
            <GiHealthNormal className="All-iconic-health" />
          </p>
          <p onClick={() => seticon(<SiParamountplus />)} required>
            <SiParamountplus className="All-iconic-inves" />
          </p>
          <p onClick={() => seticon(<MdOtherHouses />)} required>
            <MdOtherHouses className="All-iconic-other" />
          </p>
          <p onClick={() => seticon(<FaShoppingBag />)} required>
            <FaShoppingBag className="All-iconic-shopp" />
          </p>
          <p onClick={() => seticon(<FaArrowDownUpAcrossLine />)} required>
            <FaArrowDownUpAcrossLine className="All-iconic-trans" />
          </p>
          <p onClick={() => seticon(<MdOutlinePedalBike />)} required>
            <MdOutlinePedalBike className="All-iconic-travel" />
          </p>
        </div>

        <button className="save-button">Save</button>
      </form>
      <Expenselist itemlist={expenses} />
    </div>
  );
}
