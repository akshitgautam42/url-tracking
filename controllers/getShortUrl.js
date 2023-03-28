const ShortUrl = require("../models/shortURL")

async function getShortUrl(req, res){
    
        const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
        if (shortUrl == null) return res.sendStatus(404)
      
        shortUrl.clicks++
        shortUrl.save()
      
        res.redirect(shortUrl.full)
      }

module.exports = {getShortUrl};
