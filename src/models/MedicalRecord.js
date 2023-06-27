const { Schema, model } = require('mongoose');

const medicalRecordSchema = new Schema({
  complexity: { type: Number, required: true },
  specialty: { type: String, required: true },
  patient: { type: Schema.Types.ObjectId, ref: "Patient", required: true },
  student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
  //group: { type: Number, required: true },
  active: { type: Boolean, required: true, default: true }
})

module.exports = model('MedicalRecord', medicalRecordSchema);