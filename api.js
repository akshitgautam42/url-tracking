const express = require('express');
const uuid = require('uuid');
const UrlModel = require('./models');

const router = express.Router();

router.get('/generate-id', (req, res) => {
  const { url, source, campaign, medium } = req.query;

  // Generate a random UUID string
  const id = uuid.v4();

  // Hash the original URL using SHA-256
  const hash = crypto.createHash('sha256').update(url).digest('hex');

  // Combine the UUID and hashed URL to create a unique ID for the tracked URL
  const trackingId = `${id}-${hash}`;

  // Create a new URL document
  const urlData = {
    id: trackingId,
    url,
    utm: {
      source,
      campaign,
      medium,
    },
  };

  // Save the URL data to the database
  UrlModel.create(urlData)
    .then((url) => {
      res.send(url.id);
    })
    .catch((err) => {
      console.error('Error creating URL:', err);
      res.status(500).send('Error creating URL');
    });
});

module.exports = router;
