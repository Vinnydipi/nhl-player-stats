const express = require('express');
const cors = require('cors');

// Import Route Files
const Schedule = require('./routes/Schedule');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/', Schedule);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`)
})