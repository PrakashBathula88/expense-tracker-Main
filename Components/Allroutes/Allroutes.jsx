import React from "react";
import Nav from "../Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../SignUp/Signup";
import Home from "../Home/Home";
import Password from "../ForgotPassword/Password";

export default function Allroutes() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signin" element={<SignUp />}></Route>
          <Route path="/forgot" element={<Password/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
