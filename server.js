const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Allow cross-origin requests
app.use(cors());

// Sample route: GET /api
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the Render-based API!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

