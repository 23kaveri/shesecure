import React from 'react';
import backgroundImage from '../assets/background.jpg';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex flex-col items-center justify-center min-h-screen text-center text-white bg-black bg-opacity-50">
        <img src="/assets/bloom-logo.png" alt="Logo" className="w-32 h-32 mb-4" />
        <h1 className="text-4xl font-bold mb-2">Welcome to Bloom</h1>
        <p className="text-lg mb-6">Support for your well-being, one day at a time.</p>
        <div className="flex gap-4">
          <a href="/login" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Login</a>
          <a href="/signup" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
