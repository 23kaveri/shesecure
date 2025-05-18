import React, { useState, useEffect } from "react";

const moodOptions = [
  { emoji: "😄", label: "Happy" },
  { emoji: "😐", label: "Neutral" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😠", label: "Angry" },
  { emoji: "😰", label: "Anxious" },
  { emoji: "🥰", label: "Loved" },
];

function MoodTracker() {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("moodHistory");
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  const handleSubmit = () => {
    if (!mood) return alert("Please select a mood!");

    const entry = {
      mood,
      note,
      date: new Date().toLocaleString(),
    };

    const updated = [entry, ...history];
    setHistory(updated);
    localStorage.setItem("moodHistory", JSON.stringify(updated));
    setMood("");
    setNote("");
  };

  return (
    <div style={styles.container}>
      <h3>📅 Mood Tracker</h3>
      <div style={styles.moodOptions}>
        {moodOptions.map((option) => (
          <button
            key={option.emoji}
            onClick={() => setMood(option.emoji)}
            style={{
              ...styles.moodButton,
              backgroundColor: mood === option.emoji ? "#d1e7dd" : "#fff",
            }}
          >
            {option.emoji}
          </button>
        ))}
      </div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Optional note..."
        style={styles.textarea}
      />
      <button onClick={handleSubmit} style={styles.submitButton}>
        Add Entry
      </button>

      <h4>🕓 Mood History</h4>
      <ul style={styles.historyList}>
        {history.map((entry, idx) => (
          <li key={idx} style={styles.historyItem}>
            <span style={{ fontSize: "1.5rem" }}>{entry.mood}</span> —{" "}
            {entry.date}
            {entry.note && <div style={styles.note}>📝 {entry.note}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "2rem",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
    fontFamily: "sans-serif",
  },
  moodOptions: {
    display: "flex",
    gap: "10px",
    marginBottom: "10px",
  },
  moodButton: {
    fontSize: "1.5rem",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    cursor: "pointer",
  },
  textarea: {
    width: "100%",
    height: "60px",
    padding: "0.5rem",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  submitButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  historyList: {
    listStyle: "none",
    padding: 0,
  },
  historyItem: {
    padding: "0.5rem 0",
    borderBottom: "1px solid #ddd",
  },
  note: {
    marginLeft: "1.5rem",
    color: "#555",
    fontStyle: "italic",
  },
};

export default MoodTracker;
