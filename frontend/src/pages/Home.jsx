// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import homeBanner from "../assets/Img2.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="auth-container home-layout" role="main">
     
      <div className="auth-content">
        <section className="auth-card" aria-labelledby="home-title">
          <h1 id="home-title" className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">
            Secure authentication system built using the MERN stack.
          </p>

          <div className="hero-section" aria-labelledby="hero-heading">
            <h2 id="hero-heading" className="hero-title">
              Welcome to Auth Features 🚀
            </h2>
            <p className="hero-subtitle">
              Manage your account and get started quickly.
            </p>

            <div className="hero-buttons">
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="auth-button"
              >
                Get Started
              </button>

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="auth-button secondary"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="auth-banner-container">
        <img
          src={homeBanner}
          alt="Home banner illustration"
          className="auth-banner-image"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    </main>
  );
}
