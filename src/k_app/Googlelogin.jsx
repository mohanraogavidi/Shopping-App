import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../firebase";

export default function Googlelogin() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        console.log("User Logged In:", result.user);
        navigate("/home"); // redirect to home
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="google-login-page">
      <h2>Sign In</h2>
      <button className="google-btn" onClick={handleGoogleLogin}>
        Continue with Google
      </button>
    </div>
  );
}

