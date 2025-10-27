import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { motion } from 'framer-motion';
import registerImg from '../assets/img.png'; // 👈 add your image in /src/assets/

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/users/register', { name, email, password });

      if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
      }

      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {/* Left side: Form */}
      <div className="auth-content">
        <motion.div
          className="auth-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.h1
            className="auth-title"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Create Account
          </motion.h1>

          <form
            className="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
          >
            {/* Inputs with slight scale animation */}
            <motion.div
              className="auth-input-group"
              whileFocus={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="auth-input"
                required
              />
            </motion.div>

            <motion.div
              className="auth-input-group"
              whileFocus={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
                required
              />
            </motion.div>

            <motion.div
              className="auth-input-group"
              whileFocus={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
                required
              />
            </motion.div>

            {/* Animated button */}
            <motion.button
              type="submit"
              className="auth-button"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </motion.button>
          </form>

          <motion.a
            className="auth-link"
            onClick={() => navigate('/login')}
            style={{ cursor: 'pointer' }}
            whileHover={{ scale: 1.05 }}
          >
            Already have an account? Sign in
          </motion.a>
        </motion.div>
      </div>

      {/* Right side: Animated Image */}
      <motion.div
        className="auth-banner-container"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
      >
        <motion.img
          src={registerImg}
          alt="Register illustration"
          className="auth-banner-image"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1, 0, -1, 0],
            boxShadow: [
              '0 6px 18px rgba(0,0,0,0.1)',
              '0 10px 30px rgba(108,99,255,0.3)',
              '0 6px 18px rgba(0,0,0,0.1)',
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </div>
  );
}
