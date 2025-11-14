// Auth/AuthPage.js
import React, { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./Forgot";
import SocialLogin from "./SocialLogin";

export default function AuthPage({ onLoginSuccess }) {
  const [view, setView] = useState("login");
  const [showSignupToast, setShowSignupToast] = useState(false);

  const renderView = () => {
    switch (view) {
      case "signup":
        return <Signup onNavigate={setView} onSignupSuccess={() => setShowSignupToast(true)} />;
      case "forgot":
        return <ForgotPassword onNavigate={setView} />;
      case "social":
        return <SocialLogin onNavigate={setView} onLoginSuccess={onLoginSuccess} />;
      default:
        return <Login onNavigate={setView} onLoginSuccess={onLoginSuccess} showSignupToast={showSignupToast} setShowSignupToast={setShowSignupToast} />;
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" theme="colored" />
      {renderView()}
    </div>
  );
}


