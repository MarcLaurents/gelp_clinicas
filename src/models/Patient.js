const { Schema, model } = require('mongoose')

const patientSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: String, required: false },
  gender: { type: String, required: false },
  email: { type: String, required: true },
  //cpf: { type: String, required: true },
  mainPhone: { type: Number, required: true },
  secondaryPhone: { type: Number, required: false },
  active: { type: Boolean, required: true, default: true }
})

module.exports = model('Patient', patientSchema);
