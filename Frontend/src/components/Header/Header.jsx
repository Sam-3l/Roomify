// src/components/Header.jsx
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LoginModal from "../LoginModal";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    // Disable scrolling when mobile nav or login modal is open
    document.body.style.overflowY = (isMobileNavOpen + isLoginOpen) ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMobileNavOpen,isLoginOpen]);

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
            className="button2"
          >
            Login
          </button>
          <button className="button1">
            Sign Up
          </button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden z-90"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMobileNavOpen? "M6 18 18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"} />
          </svg>
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
