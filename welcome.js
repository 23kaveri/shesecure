// src/components/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';
import bloomLogo from '../assets/bloom-logo.png';         // Correct relative path
import backgroundImage from '../assets/background.jpg';   // Background image

const Welcome = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-xl p-10 max-w-md text-center">
        <img src={bloomLogo} alt="Bloom Logo" className="w-24 h-24 mx-auto mb-4 rounded-full" />

        <h1 className="text-3xl font-bold text-pink-600 mb-3">Welcome to Bloom</h1>

        <p className="text-gray-700 mb-6">
          Support for your perinatal mental health journey.
          <br />
          One day at a time.
        </p>

        <div className="flex justify-center space-x-4">
          <Link to="/login" className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full">
            Login
          </Link>
          <Link to="/signup" className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-full">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
