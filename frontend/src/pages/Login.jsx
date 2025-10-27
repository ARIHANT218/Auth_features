// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBanner from "../assets/Img2.png";
import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  
    console.log("Logging in with:", { email, password });
  };

  return (
    <main className="auth-container" role="main">
    
      <div className="auth-content">
        <section className="auth-card" aria-labelledby="login-title">
          <h1 id="login-title" className="auth-title">
            Welcome Back!
          </h1>
          <p className="auth-subtitle">Login to your account</p>

          <form onSubmit={handleLogin} noValidate>
            <label className="auth-input-group" htmlFor="email">
              <input
                id="email"
                className="auth-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email"
              />
            </label>

            <label className="auth-input-group" htmlFor="password">
              <input
                id="password"
                className="auth-input"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-label="Password"
              />
            </label>

            <button className="auth-button" type="submit">
              Log In
            </button>
          </form>

          <div className="auth-links">
            
            <p style={{ marginTop: "12px" }}>
              Don't have an account?{" "}
              <a className="auth-link" href="/register">
                Sign up
              </a>
            </p>
          </div>
        </section>
      </div>

  
      <div className="auth-banner-container">
        <div className="auth-banner">
          <img
            src={loginBanner}
            alt="Login illustration"
            style={{
              maxWidth: "480px",
              height: "auto",
              borderRadius: "1rem",
              boxShadow:
                "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              animation: "fadeIn 0.6s ease-out forwards",
            }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.classList.add("fallback");
            }}
          />
        </div>
      </div>
    </main>
  );
}
