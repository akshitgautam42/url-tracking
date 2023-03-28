const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');

const bodyParser = require('body-parser');

const ShortUrl = require('./models/shortURL');
const { createShortUrl } = require('./controllers/createShortUrl');
const { getShortUrl } = require('./controllers/getShortUrl');

const app = express();
const port = 3000;

// Connect to database
connectDB()
  .then(() => {
    console.log('Connected to database successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to database:', err);
  });

// Set view engine and body parser middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Home page route
app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls });
});

// Short URL creation API route
app.post('/shortUrls', createShortUrl);

// Short URL redirection route
app.get('/:shortUrl', getShortUrl);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
