const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 5501;
app.listen(PORT, () => {
  console.log(`CV running at http://localhost:${PORT}`);
});