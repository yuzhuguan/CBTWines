const express = require('express')
const app = express()

const Wines = require('./model/wine')

app.get('/echo/:what', (req, res) => {
    res.json(req.params)
})

// @route         GET /api/wines
// @description   get all wines
// @access        Public

app.get('/wines', (req, res) => {
    Wines.find().then(wines => {res.json(wines)})
})

module.exports = {
   path: '/api',
   handler: app
}