// Auth/SocialLogin.js
import React, { useState } from "react";
import { toast } from 'react-toastify';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import "./Auth.css";

export default function SocialLogin({ onNavigate, onLoginSuccess }) {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isFacebookLoading, setIsFacebookLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    toast.info("Connecting to Google...");

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      toast.success(`Successfully logged in as ${user.displayName}!`);
      onLoginSuccess(); // Go to HomePage
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Failed to login with Google. Please try again.");
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleFacebookLogin = () => {
    setIsFacebookLoading(true);
    toast.info("Connecting to Facebook...");

    // Simulate API call delay (replace with actual Facebook auth if needed)
    setTimeout(() => {
      toast.success("Successfully logged in with Facebook!");
      setIsFacebookLoading(false);
      onLoginSuccess();
    }, 2000);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Sign in with</h2>

        <div className="social-buttons">
          <button className="google-btn" onClick={handleGoogleLogin} disabled={isGoogleLoading}>
            {isGoogleLoading ? 'Connecting...' : 'Continue with Google'}
          </button>
          <button className="facebook-btn" onClick={handleFacebookLogin} disabled={isFacebookLoading}>
            {isFacebookLoading ? 'Connecting...' : 'Continue with Facebook'}
          </button>
        </div>

        <div className="auth-links">
          <button onClick={() => onNavigate("login")}>Back to Login</button>
        </div>
      </div>
    </div>
  );
}
    

