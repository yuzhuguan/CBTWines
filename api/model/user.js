const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = mongoose.Schema({
  username: {
    unique: true,
    type: String
  },
  password: String
})

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.createUser = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      newUser.password = hash
      newUser.save(callback)
    })
  })
}

module.exports.getUserByUsername = (username, callback) => {
  const query = { username }
  User.findOne(query, callback)
}

module.exports.getUserById = (id, callback) => {
  User.findById(id, callback)
}

module.exports.comparePassword = (inputPassword, hash, callback) => {
  bcrypt.compare(inputPassword, hash, (err, isMatch) => {
    if (err) throw err
    callback(null, isMatch)
  })
}
