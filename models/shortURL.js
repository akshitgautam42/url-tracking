const mongoose = require('mongoose');
const  nanoid  = require('nanoid');
const shortSchema = new mongoose.Schema({
    full : {
        type: String,
        required : true,
    },
    short :{
        type : String,
        required:true,
        default: () => nanoid(7)
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    }
});



const ShortUrl = mongoose.model('ShortUrl', shortSchema);



module.exports = ShortUrl;