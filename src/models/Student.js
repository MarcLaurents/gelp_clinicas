const { Schema, model } = require('mongoose')

const studentSchema = new Schema({
  ra: { type: Number, required: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: String, required: false },
  gender: { type: String, required: false },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  active: { type: Boolean, required: true, default: true }
})

module.exports = model('Student', studentSchema);
