// src/components/SignupModal.jsx
import React, { useState } from "react";
import api from "../api";

export default function SignupModal({ onClose, onSignupSuccess }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/Signup/", {
        email,
        password1,
        username,
        password2,
      });
      localStorage.setItem("accessToken", response.data.access);
      if (onSignupSuccess) onSignupSuccess(response.data);
      onClose();
    } catch (err) {
      console.error("Signup error response:", err.response?.data || err);
      setError("Signup failed. Please check your credentials.");
    }
  };

  return (
    <div className="fixed px-6 bg-white inset-0 bg-opacity-50 flex justify-center items-center z-99">
      <div className="border border-primary/30 rounded-lg p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl font-bold outline-none cursor-pointer"
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
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label className="flex flex-col gap-2 mb-2">
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded outline-none border-primary/30"
              />
            </label>
            <label className="flex flex-col gap-2 mb-2">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded outline-none border-primary/30"
              />
            </label>
          <label className="flex flex-col gap-2 mb-2">
            Password
            <input
              type="password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded outline-none border-primary/30"
            />
          </label>
          <label className="flex flex-col gap-2 mb-2">
            Confirm Password{" "}
            <input
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded outline-none border-primary/30"
            />
          </label>
          <button
            type="submit"
            className="w-full py-3 font-bold bg-secondary cursor-pointer hover:bg-tertiary text-white rounded"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 flex gap-1 items-center justify-center">
          <p className="text-sm">Already have an account?</p>
          <a href="#" className="text-sm text-tertiary">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
