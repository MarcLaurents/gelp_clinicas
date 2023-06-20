const mongoose = require('mongoose')

const MedicalStudent = mongoose.model('MedicalStudent', {
  ra: Number,
  name: String,
  lastName: String,
  birthDate: String,
  gender: String,
  email: String,
  active: Boolean
})

module.exports = MedicalStudent
