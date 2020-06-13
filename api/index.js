const express = require('express')
const app = express()
const passport = require('passport')
const Promise = require('bluebird')
const getToken = require('./auth')

const Wines = require('./model/wine')
const User = require('./model/user')

Promise.promisifyAll(User)

app.get('/echo/:what', (req, res) => {
    res.json(req.params)
})

// @route         GET /api/wines
// @description   get all wines
// @access        Public

app.get('/wines', (req, res) => {
    Wines.find().then(wines => {res.json(wines)})
})

// @route         POST /api/backstage/sign-up
// @description   user sign up
// @access        private

app.post('/backstage/sign-up', (req, res, next) => {
    var newUser = new User({
        username: req.body.username,
        password: req.body.password,
    });
    
    User.createUser(newUser, (err, user) => {
        if (err) {
            return res.status(400).json({
                title: 'error',
                msg: 'username has already existed'
            })
        }
        console.log(user);
        return res.status(200).json({
            title: 'signup sucess'
        })
    })
});

// @route         POST /api/backstage/sign-in
// @description   user sign in
// @access        public

app.post('/backstage/sign-in', (req, res, next) => {
    passport.authenticate('signin', { session: false }, (err, user, info) => {
        if (info) {
            return res.status(401).json({
                title: 'error',
                msg: info.message
            })
        }
        else {
            console.log(user)
            getToken(req, res, user);
        }
    })(req, res, next);
})

// @route         POST /api/backstage/auth-with-jwt
// @description   auth with jwt
// @access        public

app.get('/backstage/auth-with-jwt', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.status(200).json({
        title: 'Login Sucessfully',
        profile: req.user
    })
})

// @route         POST /api/backstage/delete-wine
// @description   delete wine
// @access        private

app.post('/backstage/delete-wine', passport.authenticate('jwt', { session: false }), (req, res) => {
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

app.post('/backstage/update-wine', passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log(req.body.newDetail)
    Wines.findById(req.body.newDetail._id).then(wine => {
        const filter = { name: wine.name }
        const update = {
            name: req.body.newDetail.name,
            origin: req.body.newDetail.origin,
            appellation: req.body.newDetail.appellation,
            chineseName: req.body.newDetail.chineseName,
            vintage: req.body.newDetail.vintage,
            rating: req.body.newDetail.rating,
            price: req.body.newDetail.price,
            newArrival: req.body.newDetail.newArrival,
            specialOffer: req.body.newDetail.specialOffer
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

app.post('/backstage/add-wine', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    var newWine = new Wines({
        name: req.body.newDetail.name,
        origin: req.body.newDetail.origin,
        appellation: req.body.newDetail.appellation,
        chineseName: req.body.newDetail.chineseName,
        vintage: req.body.newDetail.vintage,
        rating: req.body.newDetail.rating,
        price: req.body.newDetail.price,
        newArrival: req.body.newDetail.newArrival,
        specialOffer: req.body.newDetail.specialOffer
    });
    
    newWine.save()
        .then(
            result => {console.log(result)
            res.status(200).json({
                title: "Done.",
                message: result.name + "has bee added"
            })}
        )
        .catch(err => console.log(err));
});

module.exports = {
   path: '/api',
   handler: app
}