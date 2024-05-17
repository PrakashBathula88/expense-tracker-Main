import React, { useContext, useRef, useState } from "react";
// import AuthContext from "../SignupProvider/Signinprovider";
import "../SignUp/Signin.css";
import Profile from "../Profile/Profile";
import { CgProfile } from "react-icons/cg";
export default function SignUp() {
  // const { Login, isLoggedin } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [profileInComplete, setProfileInComplete] = useState(false);
  const [showprofile, setshowprofile] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();

  const switchHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitting = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirm = confirmPassRef.current
      ? confirmPassRef.current.value
      : null;

    if (!isLogin && password !== confirm) {
      console.error("PASSWORDS DO NOT MATCH");
      return;
    }

    try {
      const url = isLogin
        ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbj2ZqFZQTWUUSIu5W6zB9GdR8kjJlTWI"
        : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDbj2ZqFZQTWUUSIu5W6zB9GdR8kjJlTWI";

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email, password, returnSecureToken: true }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // const data = await response.json();
      // console.log(data);
      // Login(data.idToken);
      setProfileInComplete(true);
      console.log(profileInComplete);
    } catch (err) {
      console.error(err);
      // throw new Error("AUTHENTICATION FAILED");
    }
  };

  return (
    <>
      {!profileInComplete && !showprofile ? (
        <div className="container">
          <div className="All_sign_in">
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <form onSubmit={submitting} className="form_elements">
              <input
                type="email"
                placeholder="E-MAIL"
                ref={emailRef}
                required
              />
              <input
                type="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
              {!isLogin && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  ref={confirmPassRef}
                  required
                />
              )}

              <button type="submit" className="btn">
                {isLogin ? "Login" : "Sign Up"}
              </button>

              {isLogin && <p className="forgot">Forgot password</p>}
            </form>
            <button className="have" onClick={switchHandler}>
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Have an account? Login"}
            </button>
          </div>{" "}
        </div>
      ) : !showprofile ? (
        <div className="profile-incomplete-container">
          <p>Welcome to expense tracker </p>
          <h4 onClick={() => setshowprofile(true)}>Complete Profile<CgProfile  className="icon"/></h4>
        </div>
      ) : (
        <Profile />
      )}
    </>
  );
}
