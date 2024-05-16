import React, { useContext, useRef, useState } from "react";
import AuthContext from "../SignupProvider/Signinprovider";
import "../SignUp/Signin.css";
import Profile from "../Profile/Profile";

export default function SignUp() {
  const { login, isLoggedin } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [profileComplete, setProfileComplete] = useState(false);
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
    const confirm = confirmPassRef.current ? confirmPassRef.current.value : null;

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

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        login(data.idToken);
        setProfileComplete(false); 
      } else {
        throw new Error("AUTHENTICATION FAILED");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoggedin && !profileComplete) {
    return (
      <div className="profile-incomplete-container">
        <p>Your profile is incomplete. Please complete your profile.</p>
        <button onClick={() => setProfileComplete(true)}>Complete Profile</button>
      </div>
    );
  }

  return (
    <div className="container">
      {profileComplete ? (
        <Profile setProfileComplete={setProfileComplete} />
      ) : (
        <div className="All_sign_in">
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <form onSubmit={submitting} className="form_elements">
            <input type="email" placeholder="E-MAIL" ref={emailRef} required />
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
            {isLogin ? "Don't have an account? Sign Up" : "Have an account? Login"}
          </button>
        </div>
      )}
    </div>
  );
}
