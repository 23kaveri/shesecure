import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-extrabold text-pink-600">🌸 Bloom Dashboard</h1>
          <Link
            to="/"
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full"
          >
            Logout
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Chat with Bloom"
            icon="💬"
            description="Talk to the Bloom chatbot to share your mood and get instant support."
            link="/chat"
          />
          <Card
            title="Mood Tracker"
            icon="📊"
            description="Track how your mood changes over time and gain insight into your journey."
            link="/mood-tracker"
           />
          <Card
            title="Self-Care Tips"
            icon="🧘‍♀"
            description="Explore personalized mental wellness tips and activities."
            link="/self-care"
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, icon, description, link }) => (
  <Link
    to={link}
    className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 p-6 text-center"
  >
    <div className="text-5xl mb-4">{icon}</div>
    <h2 className="text-2xl font-bold text-pink-700 mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </Link>
);

export default Dashboard;