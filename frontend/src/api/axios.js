import axios from "axios";

// Get API URL from environment variables and remove trailing slash if present
const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "");

// Create an Axios instance
const api = axios.create({
  baseURL: `${API_BASE_URL}/api`, // backend API route
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach token (if exists)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
