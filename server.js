// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());

// Routes
const moodRoutes = require('./routes/moodRoutes');
app.use('/api/mood', moodRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Bloom backend running!');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
