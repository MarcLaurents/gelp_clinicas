const routes = require('express').Router()

const patientRouter = require('./patient');
const studentRouter = require('./student');

routes.use('/patients', patientRouter);
routes.use('/students', studentRouter);

module.exports = routes;