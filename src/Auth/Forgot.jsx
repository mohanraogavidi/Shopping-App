// Auth/Forgot.js
import React, { useState } from "react";
import { toast } from 'react-toastify';
import "./Auth.css";

export default function ForgotPassword({ onNavigate }) {
  const [email, setEmail] = useState("");
  const [setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = 'Email is required';
      toast.error('Email is required');
    } else if (!emailRegex.test(email)) {
      formErrors.email = 'Email address is invalid';
      toast.error('Invalid email address');
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleEmailBlur = () => {
    if (!email) {
      toast.error('Email is required');
    } else if (!emailRegex.test(email)) {
      toast.error('Email address is invalid');
    }
  };

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.warning('Please enter your email address');
      return;
    }

    if (!email.includes('@gmail.com')) {
      toast.warning('Email must be a Gmail address');
      return;
    }

    if (validate()) {
      setIsSubmitting(true);
      console.log('Password reset requested for:', email);

      toast.success('Password reset link sent! Check your email.');
      setTimeout(() => {
        onNavigate("login");
        setIsSubmitting(false);
      }, 2000);
    } else {
      toast.info('Please correct the errors before submitting');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Forgot Password</h2>
        <form onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <div className="auth-links">
          <button onClick={() => onNavigate("login")}>Back to Login</button>
        </div>
      </div>
    </div>
  );
}


