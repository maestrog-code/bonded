const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 4000;
const dbPath = path.join(__dirname, 'data', 'db.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the Bonded backend!');
});

app.get('/api/status/:name', (req, res) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to read database' });
    }

    try {
      const db = JSON.parse(data);
      const name = req.params.name;
      const user = db.users.find(u => u.name.toLowerCase() === name.toLowerCase());

      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (parseErr) {
      console.error(parseErr);
      res.status(500).json({ error: 'Failed to parse database' });
    }
  });
});

app.listen(port, () => {
  console.log(`Bonded backend listening at http://localhost:${port}`);
});
