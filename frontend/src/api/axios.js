import axios from 'axios';

// Normalize the API base URL (remove trailing slash if present)
const rawBase = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const API_BASE = rawBase.replace(/\/$/, ''); // ensures no trailing slash

const instance = axios.create({
  baseURL: `${API_BASE}/api`, // backend API (uses env var in production)
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true, // enable if you use cookies/sessions
});

// add Authorization header automatically when token exists
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
