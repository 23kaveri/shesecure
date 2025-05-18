// src/components/SelfCareTips.js
import React from "react";
import { Link } from "react-router-dom";

const tips = [
  { emoji: "🧘‍♀", title: "Take a Deep Breath", text: "Practice mindful breathing for 5 minutes." },
  { emoji: "🛁", title: "Relax in a Bath", text: "Unwind with a warm bath and soothing music." },
  { emoji: "📖", title: "Read a Book", text: "Escape with your favorite novel or a calming read." },
  { emoji: "🌳", title: "Go Outside", text: "Spend time in nature and feel the fresh air." },
  { emoji: "🖌", title: "Get Creative", text: "Try drawing, painting, or journaling." },
  { emoji: "💤", title: "Rest Well", text: "Take a short nap or prioritize quality sleep." },
];

const SelfCareTips = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-purple-700">🧘 Self-Care Tips</h1>
          <Link
            to="/dashboard"
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full"
          >
            Back to Dashboard
          </Link>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 rounded-2xl p-6 shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-2">{tip.emoji}</div>
              <h2 className="text-xl font-semibold text-pink-600 mb-1">{tip.title}</h2>
              <p className="text-gray-700">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelfCareTips;