import axios from "axios";


const API_BASE_URL =
  (import.meta.env.VITE_API_URL).replace(/\/$/, "");


const api = axios.create({
  baseURL: `${API_BASE_URL}/api`, 
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to every request (if exists)
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
