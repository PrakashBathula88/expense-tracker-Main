import React, { useRef, useContext, useState } from "react";
import AuthContext from "../SignupProvider/Signinprovider";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import "../SignUp/Signin.css";

export default function Profile({ setProfileComplete }) {
  const nameRef = useRef();
  const profileRef = useRef();
  const { token } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitProfile = async (event) => {
    event.preventDefault();
    const displayName = nameRef.current.value;
    const photoUrl = profileRef.current.value;

    try {
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDbj2ZqFZQTWUUSIu5W6zB9GdR8kjJlTWI`;

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          displayName: displayName,
          photoUrl: photoUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setSuccess(true);
        setError(null);
        setProfileComplete(true); 
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
      setSuccess(false);
    }
  };

  return (
    <div className="profile-container">
      <p>
        Your profile is 64% completed. A completed profile has higher chances of
        landing a job. Complete Now
      </p>
      <h1>Contact Details</h1>
      <button onClick={() => setProfileComplete(false)}>Cancel</button>
      <form onSubmit={submitProfile} className="form_elements">
        <div className="form-group">
          <FaGithub />
          <label>Full Name</label>
          <input type="text" ref={nameRef} required />
        </div>
        <div className="form-group">
          <CiGlobe />
          <label>Profile Photo URL</label>
          <input type="text" ref={profileRef} required />
        </div>
        <button type="submit">Update</button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Profile updated successfully!</p>}
    </div>
  );
}
