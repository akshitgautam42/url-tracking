const connectDB = require("../db");
const ShortUrl = require("../models/shortURL");



async function createShortUrl(req,res){
    try{
       if (!req.body.fullUrl) {
        throw new Error('Missing fullUrl property in request body');
    }

    //Check if Url already exists
    const existingUrl =await ShortUrl.findOne({full:req.body.fullUrl});
    if(existingUrl) {
        res.status(200).json({
            shortUrl : existingUrl.short
        });
        return;
    }

    //Generate short url and save it to DB
   
    const newUrl = await ShortUrl.create({full: req.body.fullUrl});
   // res.status(201).json({shortUrl: newUrl.short});

    res.redirect('/');

    }
    catch(error){
        console.error('Error creating short URL:', error);
        console.log(req.body);
        res.status(400).send('Bad Request');
    }
} 

module.exports = {
    createShortUrl
  };