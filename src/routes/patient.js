const router = require('express').Router()
const controller = require('../controllers/patient');

router.get('/', (req, res) => controller.getAll(req, res));
router.get('/:ra', (req, res) => controller.getOne(req, res));
router.post('/', (req, res) => controller.create(req, res));
router.put('/:ra', (req, res) => controller.update(req, res));
router.delete('/:ra', (req, res) => controller.remove(req, res));

module.exports = router
