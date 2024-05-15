import React, { useContext, useRef } from "react";
import AuthContext from "../SignupProvider/Signinprovider";

export default function SignUp() {
  const { login } = useContext(AuthContext);
  const emailref = useRef();
  const passwordref = useRef();
  const confirmpassref = useRef();

  const submiting = async (event) => {
    event.preventDefault();

    const email = emailref.current.value;
    const password = passwordref.current.value;
    const confirm = confirmpassref.current.value;

    if (password !== confirm) {
      console.error("PASSWORD DOES NOT MATCH");
      return;
    }
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDbj2ZqFZQTWUUSIu5W6zB9GdR8kjJlTWI",
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("AUTHENTICATION FAILED");
      }

      const data = await response.json();
      console.log(data)
      login(data.dToken);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form
        onSubmit={submiting}
        style={{ display: "grid", width: "300px", marginLeft: "200px" }}
      >
        <input type="email" placeholder="Email" ref={emailref}></input>
        <input type="password" placeholder="Password" ref={passwordref}></input>
        <input
          type="password"
          placeholder="Confirm Password"
          ref={confirmpassref}
        ></input>
        <button type="submit">SignUp</button>
      </form>
      <button>Have an account? Login</button>
    </div>
  );
}
