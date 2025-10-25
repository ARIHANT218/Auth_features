import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {

    try{
        const response = await axios.post('/users/register', {name, email, password});
        localStorage.setItem('token', response.data.token);
        navigate('/login');
    }
    catch(error){
        console.error("Registration failed", error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Create Account</h1>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="auth-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="auth-input"
        />
        <button 
          onClick={handleRegister} 
          className="auth-button"
        >
          Create Account
        </button>
        
        <a href="/login" className="auth-link">
          Already have an account? Sign in
        </a>
      </div>
    </div>
  );

  }


