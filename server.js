const express = require('express');
const mongoose = require('mongoose');
// const db = require('./db');
// const api = require('./api');

const ShortUrl = require('./models/shortURL');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/urls',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Mount the API route at /api
//app.use('/api', api);
app.set('view engine','ejs');
app.set(express.urlencoded({extended:false}));
app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls });
})
app.post('/shortUrls',async (req,res)=>{
  await ShortUrl.create({full:req.body.fullUrl});

      res.redirect('/');
})
// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
