import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styling/Register.css";

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); // New state for success message
  const [alreadyinuse, setAlreadyinuse] = useState(false);
  const API_URL = import.meta.env.VITE_BACKEND_URL;
  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, username, password })
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.isinUse) {
        setAlreadyinuse(true);
      } else {
        setIsRegistered(true);
      }
    });
  };

  return (
    <div className="register-page">
    <div className="register-container">
      <div className="register-card">
        {!isRegistered ? (
          <>
            {alreadyinuse && <p className="error-message">Email is already in use.</p>}
            <h2 className="register-title">Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="register-form-row">
                <div className="register-form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="register-form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="register-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="register-form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="register-button">Register</button>
            </form>
          </>
        ) : (
          <>
            <h2 className="register-success-title">Registration Successful!</h2>
            <p>You can now log in to your account.</p>
            <Link to="/login">
              <button className="register-link-button">Go to Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default Register;
