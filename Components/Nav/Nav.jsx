import React from "react";
import { Link } from "react-router-dom";
import "../Nav/nav.css"
const Nav = () => {
  return (
    <div >
      <ul className="All_routing">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
