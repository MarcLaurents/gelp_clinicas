const Patient = require('../models/Patient')

// Manipulação do banco de dados.
const patientService = {
    findAll: async (req, res) => {
        const patients = await Patient.find();

        return patients;
    },
    findOne: async (ra) => {
        const patientExists = await Patient.findOne({ ra });

        if(!patientExists) return Promise.reject({ error: "Patient not found" })

        return patientExists;
    },
    save: async (payload) => {
        const patient = await Patient.create(payload);

        return patient;
    },
    update: async (ra, payload) => {
        const patientExists = Patient.findOne({ ra });

        if(!patientExists) return Promise.reject({ error: "Patient not found" })

        await Patient.updateOne({ ra }, payload);

        return { msg: 'Updated successfully', data: payload };
    },
    remove: async (ra) => {
        const patientExists = Patient.findOne({ ra });

        if(!patientExists) return Promise.reject({ error: "Patient not found" })

        await Patient.deleteOne({ ra });

        return { msg: 'Deleted successfully' }
    }
}

module.exports = patientService;
