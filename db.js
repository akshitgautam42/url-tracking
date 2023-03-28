const mongoose = require('mongoose');

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

const shortSchema = new mongoose.Schema({
  full : {
      type: String,
      required : true,
  }});

  const ShortUrl = mongoose.model('ShortUrl', shortSchema);

ShortUrl.create({ full: "google.com" })
    .then(() => console.log("Document created"))
    .catch((err) => console.error(err));