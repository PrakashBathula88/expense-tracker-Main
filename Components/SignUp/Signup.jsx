import React, { useContext, useRef, useState } from "react";
import AuthContext from "../SignupProvider/Signinprovider";
import "../SignUp/Signin.css";
export default function SignUp() {
  const { login } = useContext(AuthContext);
  const [islogin, setislogin] = useState([]);
  const emailref = useRef();
  const passwordref = useRef();
  const confirmpassref = useRef();
  const SwitchHandler = () => {
    setislogin((prevstate) => !prevstate);
  };
  const submiting = async (event) => {
    event.preventDefault();

    const email = emailref.current.value;
    const password = passwordref.current.value;
    const confirm = confirmpassref.current
      ? confirmpassref.current.value
      : null;

    if (!islogin && password !== confirm) {
      console.error("PASSWORD DOES NOT MATCH");
      return;
    }
    try {
      const url = islogin
        ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbj2ZqFZQTWUUSIu5W6zB9GdR8kjJlTWI"
        : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDbj2ZqFZQTWUUSIu5W6zB9GdR8kjJlTWI";

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email, password, returnSecureToken: true }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("AUTHENTICATION FAILED");
      }

      const data = await response.json();
      console.log(data);
      login(data.dToken);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container">
      <div className="All_sign_in">
        <h1>{islogin ? "Sign Up" : "Login"}</h1>
        <form onSubmit={submiting} className="form_elements">
          <input type="email" placeholder="E-MAIL" ref={emailref}></input>
          <input
            type="password"
            placeholder="Password"
            ref={passwordref}
          ></input>
          {!islogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              ref={confirmpassref}
            ></input>
          )}

          <button type="submit" className="btn">
            {islogin ? "SignUp" : "Login"}
          </button>
        </form>
        <button className="have" onClick={SwitchHandler}>
          {islogin ? "Have an account? Login" : "Dont have an account ? Signup"}
        </button>
      </div>
    </div>
  );
}
