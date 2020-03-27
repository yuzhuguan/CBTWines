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

// @route         POST /api/backstage/delete-wine
// @description   delete wine
// @access        private

app.post('/backstage/delete-wine', (req, res) => {
    console.log(req.body.targetWine._id)
    Wines.findById(req.body.targetWine._id).then(wine => {
        wine.remove();
        console.log(wine.name + ' ' + wine.vintage + ' has been removed')
        res.status(200).json({
            title: "Done.",
            message: wine.name + ' ' + wine.vintage + ' has been removed'
        })
    })
})

// @route         POST /api/backstage/update-wine
// @description   update wine
// @access        private

app.post('/backstage/update-wine',  (req, res) => {
    console.log(req.body.newDetail)
    Wines.findById(req.body.newDetail._id).then(wine => {
        const filter = { name: wine.name }
        const update = {
            name: req.body.newDetail.name,
            appellation: req.body.newDetail.appellation,
            chineseName: req.body.newDetail.chineseName,
            vintage: req.body.newDetail.vintage,
            rating: req.body.newDetail.rating,
            price: req.body.newDetail.price
        }

        Wines.findOneAndUpdate(filter, update,{new: true}).then(result => {
            console.log(wine.name + "'s detail has beem updated");
            res.status(200).json({
                title: "Done.",
                message: wine.name + "'s detail has beem updated"
            })
        })  
    })
}) 

// @route         POST /api/backstage/add-wine
// @description   update wine
// @access        private

app.post('/backstage/add-wine', (req, res, next) => {
    var newWine = new Wines({
        name: req.body.newDetail.name,
        appellation: req.body.newDetail.appellation,
        chineseName: req.body.newDetail.chineseName,
        vintage: req.body.newDetail.vintage,
        rating: req.body.newDetail.rating,
        price: req.body.newDetail.price
    });
    
    newWine.save()
        .then(result => console.log(result))
        .catch(err => console.log(err));
});

module.exports = {
   path: '/api',
   handler: app
}