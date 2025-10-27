import { useState } from 'react';

import axios from '../api/axios';
import { Navigate, useNavigate } from 'react-router-dom';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {

        try{
            const response = await axios.post('/users/login', {email, password});
           if (response.data?.token) {
               localStorage.setItem('token', response.data.token);
           }
            console.log('stored token:', localStorage.getItem('token'));
            navigate('/');
        }
        catch(error){
            console.error("Login failed", error);
        }

    }
      return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Welcome Back</h1>
        
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
          onClick={handleLogin} 
          className="auth-button"
        >
          Sign In
        </button>
        
        <a href="/register" className="auth-link">
          Don't have an account? Sign up
        </a>
      </div>
    </div>
  );
}