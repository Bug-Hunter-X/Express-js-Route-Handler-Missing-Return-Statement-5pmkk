const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to get user data using userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});