import { useSelector } from "react-redux";
import Cartitemlist from "./Components/CartItemList/Cartitemlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import SignUp from "./Components/SignUp/Signup";
import Password from "../src/Components/ForgotPassword/Password"
function App() {
  const showcart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <div>
        <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route element={<Private/>}> */}
          <Route path="/" element={<Home />} />
          {/* </Route> */}
          <Route path="/signin" element={<SignUp />}></Route>
          <Route path="/forgot" element={<Password />}></Route>
        </Routes>
      </BrowserRouter>
      {showcart && <Cartitemlist />}
    </div>
  );
}

export default App;
