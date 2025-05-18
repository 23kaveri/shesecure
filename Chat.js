// src/components/Chat.js
import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessages");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const chatboxRef = useRef(null);

  const positiveMoods = ["happy", "joy", "grateful", "bonded", "loved", "😊", "🥰", "😄", "😍", "🤱"];
  const concerningMoods = ["sad", "anxious", "overwhelmed", "guilty", "tired", "angry", "lonely", "😢", "😞", "😠", "😩", "😔"];
  const urgentMoods = ["hopeless", "worthless", "suicidal", "panic", "numb", "😭", "😖", "😣", "🥺", "😰"];

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const scrollToBottom = () => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const analyzeMood = (text) => {
    const lowerText = text.toLowerCase();
    let moodScore = { positive: 0, concerning: 0, urgent: 0 };

    positiveMoods.forEach(mood => { if (lowerText.includes(mood)) moodScore.positive++; });
    concerningMoods.forEach(mood => { if (lowerText.includes(mood)) moodScore.concerning++; });
    urgentMoods.forEach(mood => { if (lowerText.includes(mood)) moodScore.urgent++; });

    if (moodScore.urgent > 0) {
      return {
        message: "⚠ You may be experiencing a tough time. You're not alone. Please reach out to a professional or helpline. 💛",
        tip: "📞 Reach out to a trusted person or call a support line. You're not alone."
      };
    } else if (moodScore.concerning > 0) {
      return {
        message: "😟 It sounds like you're going through something. It's okay to talk about it — support is available. 💬",
        tip: "📝 Try journaling your thoughts or taking a short walk. It might help calm your mind."
      };
    } else if (moodScore.positive > 0) {
      return {
        message: "😊 That’s great to hear! Keep taking care of yourself. 🌼",
        tip: "🌞 Enjoy the moment! Maybe go outside and soak up some sun."
      };
    } else {
      return {
        message: "🤔 I’m here to listen. Try sharing how you feel using words or emojis.",
        tip: "💬 You can try expressing your feelings in more detail or use an emoji."
      };
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "You", text: input };
    const response = analyzeMood(input);
    const botMsg1 = { sender: "Bot", text: response.message };
    const botMsg2 = { sender: "Bot", text: response.tip };

    const updated = [...messages, userMsg, botMsg1, botMsg2];
    setMessages(updated);
    setInput("");
    speak(response.message);
  };

  const handleClearChat = () => {
    if (window.confirm("Are you sure you want to clear the chat?")) {
      localStorage.removeItem("chatMessages");
      setMessages([]);
    }
  };

  return (
    <div className={`chat-container ${darkMode ? 'dark' : ''}`}>
      <div className="chat-header">
        🧠 Mood Analyzer for Perinatal Women
        <div>
          <button onClick={() => setDarkMode(!darkMode)}>🌙 Toggle Dark Mode</button>
          <button onClick={handleClearChat}>🗑 Clear Chat</button>
        </div>
      </div>

      <div className="chat-body" ref={chatboxRef}>
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender === 'You' ? 'user' : 'bot'}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your mood using words or emojis..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
