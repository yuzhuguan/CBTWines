const mongoose = require('mongoose');

const wineSchema = mongoose.Schema({
    name: String,
    appellation: String,
    chineseName: String,
    origin: String,
    vintage: String,
    rating: String,
    price: Number,
    discountPrice: Number,
    newArrival: String,
    specialOffer: String,
    colorName: String,
    colorAppellation: String,
    colorChineseName: String,
    colorOrigin: String,
    colorVintage: String,
    colorRating: String,
    colorPrice: String,
    colorDiscountPrice: String,
});

module.exports = mongoose.model('Wines', wineSchema);