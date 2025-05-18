import React, { useState } from 'react';
import './Chatbot.css'; // for styling

const moodResponses = {
  happy: "😊 That's wonderful! Keep enjoying the good vibes.",
  sad: "😢 I'm here for you. It's okay to feel sad — you're not alone.",
  anxious: "🧠 It sounds like you’re going through something. It’s okay to talk about it — support is available.",
  tired: "💤 Make sure to get some rest. You deserve it.",
  angry: "😠 Try taking a deep breath or writing down your feelings.",
  calm: "😌 That’s great. Staying grounded is powerful.",
  hopeful: "🌈 Keep that hope alive. Good things are coming.",
  default: "🌸 Try journaling your thoughts or taking a short walk. It might help calm your mind.",
};

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const getBotResponse = (text) => {
    const mood = text.toLowerCase();
    const matchedMood = Object.keys(moodResponses).find(key => mood.includes(key));
    return moodResponses[matchedMood] || moodResponses.default;
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    const botMessage = { sender: 'bot', text: getBotResponse(input) };

    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="chatbot-container">
      <h2>🧠 Mood Analyzer for Perinatal Women</h2>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your mood using words..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
