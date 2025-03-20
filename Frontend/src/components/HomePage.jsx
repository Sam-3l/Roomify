// src/HomePage.jsx
import React from 'react';
import Header from './Header/Header';
import MainContent from './MainContent';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen w-screen">
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <MainContent/>

      {/* Footer */}
    </div>
  )
};

export default HomePage;
