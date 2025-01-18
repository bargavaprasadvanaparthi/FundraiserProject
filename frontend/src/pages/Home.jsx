import React from "react";
import { Link } from "react-router-dom";
import "../Styling/Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-page">
    <div className="home-container">
      <main className="home-content">
        <h1 className="home-title">Welcome to CharityFund</h1>
        <p className="home-tagline">Make a difference by contributing to our cause.</p>
        <div className="action-buttons">
          <Link to="/login" className="login-button">
            Login
          </Link>
          <Link to="/register" className="signup-button">
            Sign Up
          </Link>
        </div>
      </main>
     </div>
    </div>
  );
};

export default Home;
