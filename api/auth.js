const jwt = require('jsonwebtoken')
const passport = require('passport')
const passportJWT = require('passport-jwt')

const LocalStrategy = require('passport-local')
const JWTStrategy = passportJWT.Strategy

const ExtractJWT = passportJWT.ExtractJwt

const secret_key = 'secret'

const User = require('./model/user')

passport.use('signin', new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) { return done(err) }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' })
      }
      User.comparePassword(password, user.password, (err, isMatch) => {
        if (err) throw err
        if (isMatch) {
          return done(null, user)
        } else {
          return done(null, false, { message: 'Invaild password.' })
        }
      })
    })
  }
))

passport.use('jwt', new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromHeader('token'),
  secretOrKey: secret_key
},
(jwtPayload, done) => {
  console.log(jwtPayload)
  User.findById(jwtPayload.id, (err, user) => {
    done(err, user)
  })
}
))

const getToken = (req, res, user) => {
  console.log(user._id)
  const code = user._id
  const token = jwt.sign({ id: code }, secret_key)
  res.status(200).json({
    title: 'signin sucess',
    username: user.username,
    token
  })
}

module.exports = getToken
