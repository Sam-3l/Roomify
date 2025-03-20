// src/api.js
import axios from "axios";

const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/';


const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach the JWT token from localStorage, if available.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
