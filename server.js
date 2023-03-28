const express = require('express');
const mongoose = require('mongoose');
// const db = require('./db');
// const api = require('./api');
const bodyParser = require('body-parser');

const ShortUrl = require('./models/shortURL');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/urls',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
}, (err) => {
  if (err) {
    console.log('Error connecting to database:', err);
  } else {
    console.log('Database connected successfully!');
  }
});

// Mount the API route at /api
//app.use('/api', api);
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls });
})
app.post('/shortUrls', async (req, res) => {
  try {
    if (!req.body.fullUrl) {
      throw new Error('Missing fullUrl property in request body');
    }

    await ShortUrl.create({ full: req.body.fullUrl });
    res.redirect('/');
  } catch (error) {
    console.log(error);
    console.log(req.body);
    res.status(400).send('Bad Request');
  }
});
app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
});
// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
