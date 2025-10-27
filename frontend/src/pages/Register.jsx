import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { motion } from "framer-motion";
import registerImg from "../assets/img.png"; 
import "../styles/Registe.css";




export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/users/register", {
        name,
        email,
        password,
      });

      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
      }

      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {/* Left - Register Form */}
      <motion.div
        className="auth-content"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="auth-card"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.h1
            className="auth-title"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Create Account
          </motion.h1>

          <p className="auth-subtitle">
            Join us today and start your journey.
          </p>

          <form
            className="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
          >
            <div className="auth-input-group">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="auth-input"
                required
              />
            </div>

            <div className="auth-input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
                required
              />
            </div>

            <div className="auth-input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
                required
              />
            </div>

            <motion.button
              type="submit"
              className={`auth-button ${loading ? "loading" : ""}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </motion.button>
          </form>

          <motion.a
            className="auth-link"
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer" }}
            whileHover={{ scale: 1.05 }}
          >
            Already have an account? Sign in
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="auth-banner-container"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={registerImg}
          alt="Register Illustration"
          className="auth-banner-image"
        />
      </motion.div>
    </div>
  );
}
