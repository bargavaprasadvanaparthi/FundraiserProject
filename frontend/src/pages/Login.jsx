import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/Login.css"; // Import the CSS file

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setInvalid(false);

    try {
      const response = await fetch("http://localhost:3033/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usernameOrEmail, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (data.invalid) {
        setInvalid(true);
        setInvalidMessage(data.message);
      } else {
        console.log(data.token)
        localStorage.setItem("token", data.token);
        navigate("/app/mainpage");
      }
    } catch (error) {
      setLoading(false);
      setInvalid(true);
      setInvalidMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-page"> 
    <div className="login-container">
      {invalid && <p className="login-error-message">{invalidMessage}</p>}
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="login-input"
          placeholder="Username or Email"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="login-button"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
    </div>
  );
};

export default Login;
