const mongoose = require('mongoose');

const wineSchema = mongoose.Schema({
    name: String,
    appellation: String,
    chineseName: String,
    origin: String,
    vintage: String,
    rating: String,
    price: Number,
    newArrival: String,
    specialOffer: String
});

module.exports = mongoose.model('Wines', wineSchema);