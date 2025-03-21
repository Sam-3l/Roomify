// src/HomePage.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/Hero';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default HomePage;
