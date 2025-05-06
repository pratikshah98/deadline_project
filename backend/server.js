const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// Fixed deadline
const deadline = new Date('2025-05-31T23:59:59Z');

app.get('/api/deadline', (req, res) => {
  const now = new Date();
  const secondsLeft = Math.floor((deadline.getTime() - now.getTime()) / 1000);
  res.json({ secondsLeft: Math.max(0, secondsLeft) });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
