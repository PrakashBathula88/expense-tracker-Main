import React from "react";
import Expenses from "../AddingExpenses/Expenses";
import Cartitemlist from "../CartItemList/Cartitemlist";
import { useSelector } from "react-redux";

function Home() {
  // const showcart = useSelector((state) => state.portal.cartIsVisible);
  return (
    <div>
      <Expenses />
      {/* {showcart && <Cartitemlist />} */}
    </div>
  );
}

export default Home;
