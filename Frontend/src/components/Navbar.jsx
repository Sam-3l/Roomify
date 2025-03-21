// src/components/Navbar.jsx
import React from 'react';

export default function Navbar({ isOpen, onLoginClick, onSignupClick }) {
  return (
    <nav
      className={
        isOpen
          ? "w-[400px] p-4 bg-white border-l border-secondary h-screen justify-between absolute right-0 top-0 flex flex-col items-start"
          : "hidden"
      }
    >
      {/* Navigation Links */}
      <ul className="flex flex-col gap-6 text-primary text-xl px-6 mb-8">
        <li>
          <a href="#" className="hover:text-secondary">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-secondary">
            Timetable
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-secondary">
            Announcements
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-secondary">
            Contact
          </a>
        </li>
      </ul>
      {/* Login and Signup Buttons */}
      <div className="flex flex-col w-full gap-4 px-6">
        <button
          onClick={onLoginClick}
          className="border border-secondary w-full py-2.5 rounded-md text-center text-secondary hover:bg-gray-100 transition duration-200"
        >
          Login
        </button>
        <button
          onClick={onSignupClick}
          className="bg-secondary hover:bg-tertiary w-full py-3 rounded-md text-center text-white transition duration-200"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}
