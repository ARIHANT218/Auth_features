import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Welcome to Auth Features 🚀</h1>
        <p className="auth-subtitle">
          Secure authentication system built using the MERN stack.
        </p>

        <div className="home-buttons">
          <button
            onClick={() => navigate("/Login")}
            className="auth-button"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/Register")}
            className="auth-button secondary"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
