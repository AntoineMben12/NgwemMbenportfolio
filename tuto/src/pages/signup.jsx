import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css';

export default function SignUp({ onSignUp }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch('http://localhost:5000/api/admin/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
        onSignUp && onSignUp();
        setTimeout(() => navigate('/login'), 1200);
      } else {
        setError(data.message || 'Sign up failed');
      }
    } catch {
      setError('Server error');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-title">Admin Sign Up</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="signup-input"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="signup-input"
          value={form.password}
          onChange={handleChange}
          required
        />
        {error && <div className="signup-error">{error}</div>}
        {success && <div className="signup-success">Sign up successful!</div>}
        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
}
