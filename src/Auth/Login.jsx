import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

const Login = ({ onNavigate, onLoginSuccess, showSignupToast, setShowSignupToast }) => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Show success toast when coming from Signup page
  useEffect(() => {
    if (showSignupToast) {
      toast.success("Account created successfully! Please login.");
      setShowSignupToast(false);
    }
  }, [showSignupToast, setShowSignupToast]);

  const validate = () => {
    let formErrors = {};

    // Email Validation
    if (!email) {
      formErrors.email = 'Email is required';
      toast.error('Email is required');
    } else if (!emailRegex.test(email)) {
      formErrors.email = 'Email address is invalid';
      toast.error('Invalid email address');
    }

    // Password Validation
    if (!password) {
      formErrors.password = 'Password is required';
      toast.error('Password is required');
    } else if (password.length <= 8) {
      formErrors.password = 'Password must be more than 8 characters';
      toast.error('Password must be more than 8 characters');
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

  const handlePasswordBlur = () => {
    if (!password) {
      toast.error('Password is required');
    } else if (password.length <= 8) {
      toast.error('Password must be more than 8 characters');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning('Please fill both email and password');
      return;
    }

    if (!email.includes('@gmail.com')) {
      toast.warning('Email must be a Gmail address');
      return;
    }

    if (validate()) {
      setIsSubmitting(true);
      console.log('Login data is valid:', { email, password });

      toast.success('Login successful! Redirecting to home...');
      setTimeout(() => {
        onLoginSuccess();
        setIsSubmitting(false);
      }, 1500);
    } else {
      toast.info('Please correct the errors before submitting');
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePasswordBlur}
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="auth-links">
          <button onClick={() => onNavigate("signup")}>Create Account</button>
          <button onClick={() => onNavigate("social")}>Sign With Google</button>
          <button onClick={() => onNavigate("forgot")}>Forgot Password?</button>
        </div>
      </div>
    </div>
  );
}

export default Login;


