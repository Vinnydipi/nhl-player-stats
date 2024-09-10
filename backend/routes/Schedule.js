const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/schedule', async (req, res) => {

  const url = `https://api-web.nhle.com/v1/schedule/2024-09-21`;

  try { 
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error Fetching Schedule: ", error);
    res.status(500).json({ error: "Failed to fetch schedule" })
  }
});

module.exports = router;