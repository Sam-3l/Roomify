// src/components/LoginModal.jsx
import React, { useState } from "react";
import api from "../api";

export default function LoginModal({ onClose, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login/", { email, password });
      localStorage.setItem("accessToken", response.data.access);
      if (onLoginSuccess) onLoginSuccess(response.data);
      onClose();
    } catch (err) {
      console.error("Login error response:", err.response?.data || err);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="fixed px-6 bg-white inset-0 bg-opacity-50 flex justify-center items-center z-99">
      <div className="border border-primary/30 rounded-lg p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl font-bold focus:outline-none cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="black"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Email */}
          <label className="flex flex-col gap-2">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded border-primary/30 outline-none"
            />
          </label>
          {/* Password */}
          <label className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p>Password</p>
              <a href="#" className="text-tertiary text-sm">
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded border-primary/30 outline-none"
            />
          </label>
          <button
            type="submit"
            className="w-full py-3 font-bold bg-secondary cursor-pointer hover:bg-tertiary text-white rounded"
          >
            Login
          </button>
        </form>
        <div className="mt-4 flex gap-1 items-center justify-center">
          <p className="text-sm">Don't have an account?</p>
          <a href="#" className="text-sm text-tertiary">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
