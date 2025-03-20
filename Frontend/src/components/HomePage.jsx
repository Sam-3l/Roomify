// src/HomePage.jsx
import React from 'react';
import Header from './Header/Header';
import MainContent from './Hero';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <MainContent/>

      {/* Footer */}
    </div>
  )
};

export default HomePage;
