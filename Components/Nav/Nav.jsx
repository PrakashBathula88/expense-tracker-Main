import { Link, useNavigate } from "react-router-dom";
import "../Nav/nav.css";
import { useContext } from "react";
import AuthContext from "../SignupProvider/Signinprovider";

const Nav = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isloggedin;
  const navigate = useNavigate();

  const handleLogout = () => {
    authCtx.logout();
    navigate("/signin");
  };

  return (
    <div>
      <ul className="All_routing">
        {!isLoggedIn && (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <li>
            <Link to="/signin">Signin</Link>
          </li>
        )}
        <button onClick={handleLogout} className="logout-button-top">
          LOGOUT
        </button>
      </ul>
    </div>
  );
};

export default Nav;
