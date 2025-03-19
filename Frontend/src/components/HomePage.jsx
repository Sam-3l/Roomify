// src/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Theatre Booking</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4">
              Experience the Magic of Live Theatre
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Book your tickets for the best shows in town and enjoy unforgettable performances that
              bring stories to life on stage.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition duration-300">
              Book Now
            </button>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Theatre performance"
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          &copy; {new Date().getFullYear()} Theatre Booking. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
