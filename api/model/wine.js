const mongoose = require('mongoose');

const wineSchema = mongoose.Schema({
    name: String,
    appellation: String,
    origin: String,
    vintage: Number,
    stock: Number,
    Price: Number
});

module.exports = mongoose.model('Wines', wineSchema);