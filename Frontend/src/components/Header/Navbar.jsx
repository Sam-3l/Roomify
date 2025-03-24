// src/components/Navbar.jsx
import React from 'react';

export default function Navbar({ isOpen, onLoginClick, onSignupClick }) {
  return (
    <nav
      className={
        isOpen
          ? "max-w-[480px] w-screen p-4 bg-white border-l border-secondary h-[100dvh] justify-between absolute right-0 top-0 flex flex-col items-start"
          : "max-w-[480px] w-screen p-4 bg-white border-l border-secondary h-[100dvh] justify-between absolute right-0 top-0 flex flex-col items-start close"
      }
    >
      <p></p>
      {/* Navigation Links */}
      <ul className="flex flex-col gap-8  text-primary text-xl px-8">
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
          className="button2 w-full"
        >
          Login
        </button>
        <button
          onClick={onSignupClick}
          className="button1 w-full"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
}
