const service = require('../services/patient');

const patientController = {
    getAll: async(req, res) => {
        try {
            const patients = await service.findAll(req, res);
            return res.status(200).json(patients);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    getOne: async(req, res) => {
        if(!req.params.ra) return res.status(400).json({ message: 'RA is required' });

        try {
            const patient = await service.findOne(req.params.ra);
            return res.status(200).json(patient);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    create: async(req, res) => {
        const { body } = req;

        if(!body.ra) return res.status(400).json({ message: 'RA is required' });

        try {
            const patient = await service.save(body);
            return res.status(200).json(patient);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    update: async(req, res) => {
        if(!req.params.ra) return res.status(400).json({ message: 'RA is required' });

        const { body } = req;

        try {
            const patient = await service.update(req.params.ra, body);
            return res.status(200).json(patient);
        } catch(error) {
            return res.status(400).json(error);
        }
    },
    remove: async (req, res) => {
        if(!req.params.ra) return res.status(400).json({ message: 'RA is required' });

        try {
            const patient = await service.remove(req.params.ra);
            return res.status(200).json(patient);
        } catch(error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = patientController;