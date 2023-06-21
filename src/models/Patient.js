const { Schema, model } = require('mongoose')

const patientSchema = new Schema({
  ra: { type: Number, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  active: { type: Boolean, required: true, default: true }
})

module.exports = model('Patient', patientSchema);
