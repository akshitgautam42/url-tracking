const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  id: String,
  url: String,
  utm: {
    source: String,
    campaign: String,
    medium: String,
  },
});

const UrlModel = mongoose.model('Url', urlSchema);

module.exports = UrlModel;
