const mongoose = require('mongoose')

const Patient = mongoose.model('Patient', {
  ra: Number,
  name: String,
  lastName: String,
  birthDate: String,
  gender: String,
  email: String,
  active: Boolean
})

module.exports = Patient
