import React from "react";
import "../ForgotPassword/Forgotpassword.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { database } from "../Firebaseconfig/Firebaseconfig";
export default function Password() {
  const handlesubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(database, emailVal)
      .then((data) => {
        alert("CHECK YOUR MAIL");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <div className="form-container">
      <div className="logo-container">Forgot Password</div>

      <form className="form" onSubmit={(e) => handlesubmit(e)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <button className="form-submit-btn" type="submit">
          Send Email
        </button>
      </form>

      <p className="signup-link">
        Don't have an account?
        <a href="something" className="signup-link link">
          {" "}
          Sign up now
        </a>
      </p>
    </div>
  );
}
