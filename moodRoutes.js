// routes/moodRoutes.js
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { moodText } = req.body;
  console.log("Received mood from frontend:", moodText);
  res.json({ message: "Mood received", moodText });
});

module.exports = router;
