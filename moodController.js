// backend/controllers/moodController.js
exports.analyzeMood = (req, res) => {
  const moods = req.body.moods; // e.g. ['😐', '😢', '😢', '😢']
  const sadCount = moods.filter(m => m === '😢').length;

  if (sadCount >= 3) {
    return res.json({
      alert: true,
      message: 'Consider speaking with a professional.'
    });
  } else {
    return res.json({
      alert: false,
      message: 'Keep going, you’re doing great!'
    });
  }
};
