// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/welcome";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Chat from "./components/Chat";
import MoodTracker from "./components/MoodTracker"; // Moved to components folder for consistency
import SelfCareTips from "./components/SelfCareTips";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/mood-tracker" element={<MoodTracker />} /> {/* ✅ New route */}
        <Route path="/self-care" element={<SelfCareTips />} />
      </Routes>
    </Router>
  );
}

export default App;