import React from "react";
import Nav from "../Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../SignUp/Signup";

export default function Allroutes() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/">Homesection</Route>
          <Route path="/signin" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
