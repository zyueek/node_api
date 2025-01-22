const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Existing route (if you have one):
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the Render-based API!' });
});

// NEW route to trigger a text file download
app.get('/download', (req, res) => {
  // Set headers to force download
  res.setHeader('Content-Disposition', 'attachment; filename=renderMessage.txt');
  res.setHeader('Content-Type', 'text/plain');

  // The text content in the file
  res.send('hi, i come from render');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

