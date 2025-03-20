// src/components/Header.jsx
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LoginModal from "./LoginModal";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isMobileNavOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMobileNavOpen]);

  return (
    <header className="w-full">
      <div className="flex px-6 md:px-12 py-4 justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-secondary">Roomify</div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-secondary">Home</a>
          <a href="#" className="hover:text-secondary">Timetable</a>
          <a href="#" className="hover:text-secondary">Announcements</a>
          <a href="#" className="hover:text-secondary">Contact</a>
          <button
            onClick={() => setIsLoginOpen(true)}
            className="border border-secondary px-6 py-2.5 rounded-md"
          >
            Login
          </button>
          <button className="bg-secondary text-white px-6 py-3 rounded-md">
            Sign Up
          </button>
        </nav>
        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <img
            src={isMobileNavOpen ? "../src/assets/close.svg" : "../src/assets/menu.svg"}
            alt="Menu"
            className="h-12"
          />
        </button>
      </div>
      {/* Mobile Navbar */}
      <Navbar
        isOpen={isMobileNavOpen}
        onLoginClick={() => {
          setIsMobileNavOpen(false);
          setIsLoginOpen(true);
        }}
        onSignupClick={() => {
          setIsMobileNavOpen(false);
          // Trigger sign-up modal or redirection as needed.
        }}
      />
      {/* Login Modal */}
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
    </header>
  );
}
