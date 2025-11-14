// Auth/Signup.js
import React, { useState } from "react";
import { toast } from 'react-toastify';
import "./Auth.css";

export default function Signup({ onNavigate, onSignupSuccess }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    let formErrors = {};

    // First Name Validation
    if (!firstName.trim()) {
      formErrors.firstName = 'First name is required';
      toast.error('First name is required');
    }

    // Last Name Validation
    if (!lastName.trim()) {
      formErrors.lastName = 'Last name is required';
      toast.error('Last name is required');
    }

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

    // Confirm Password Validation
    if (!confirm) {
      formErrors.confirm = 'Please confirm your password';
      toast.error('Please confirm your password');
    } else if (password !== confirm) {
      formErrors.confirm = 'Passwords do not match';
      toast.error('Passwords do not match');
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleFirstNameBlur = () => {
    if (!firstName.trim()) {
      toast.error('First name is required');
    }
  };

  const handleLastNameBlur = () => {
    if (!lastName.trim()) {
      toast.error('Last name is required');
    }
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

  const handleConfirmBlur = () => {
    if (!confirm) {
      toast.error('Please confirm your password');
    } else if (password !== confirm) {
      toast.error('Passwords do not match');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // if (!firstName.trim() || !lastName.trim() || !email || !password || !confirm) {
    //   toast.warning('Please fill in all fields');
    //   return;
    // }

    if (!email.includes('@gmail.com')) {
      toast.warning('Email must be a Gmail address');
      return;
    }

    if (validate()) {
      setIsSubmitting(true);
      console.log('Signup data is valid:', { firstName, lastName, email, password });

      toast.success('Account created successfully! Redirecting to login...');
      setTimeout(() => {
        onSignupSuccess();
        onNavigate("login");
        setIsSubmitting(false);
      }, 1500);
    } else {
      toast.info('Please correct the errors before submitting');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={handleFirstNameBlur}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={handleLastNameBlur}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            onBlur={handleConfirmBlur}
            required
          />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="auth-links">
          <button onClick={() => onNavigate("login")}>Back to Login</button>
        </div>
      </div>
    </div>
  );
}


