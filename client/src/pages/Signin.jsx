// SignIn.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // if using React Router, otherwise use <a>
import './SignIn.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // optional: for future submit handling

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your auth logic here (Firebase, Supabase, your backend, etc.)
    console.log('Sign in attempt:', { email, password });
    setLoading(true);
    // Simulate delay
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <div className="header">
          <div className="logo">
            <span className="cart-icon">🛒</span>
            <h1>FreshCart</h1>
          </div>
        </div>

        <h2>Welcome Back</h2>
        <p className="subtitle">Sign in to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group password-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#forgot" className="forgot-link">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="signin-btn" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>

        <div className="demo-credentials">
          <h4>Demo Credentials:</h4>
          <p>
            <strong>User:</strong> any email + <code>password123</code>
          </p>
          <p>
            <strong>Admin:</strong> admin@freshcart.com + <code>admin123</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;