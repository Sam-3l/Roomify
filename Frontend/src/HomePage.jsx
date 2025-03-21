// src/HomePage.jsx
import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/Body/MainContent';
import Footer from './components/Footer';

export default function HomePage(){
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};


