const router = require('express').Router()
const Patient = require('../models/Patient')

// CREATE - Patient data insert to DB
router.post('/create', async (req, res) => {
  // req.body
  const { ra, name, lastName, birthDate, gender, email, active } = req.body

  // validacoes
  if (!ra) {
    res.status(422).json({ error: 'RA is required!' })
    return
  }

  const patient = {
    ra,
    name,
    lastName,
    birthDate,
    gender,
    email,
    active
  }

  // create
  try {
    // criando dados
    await Patient.create(patient)

    res.status(201).json({ message: 'Patient inserted successefully!' })
  } catch (error) {
    res.status(500).json({ error })
  }
})

// READ - Show Patient data from DB
router.get('/read', async (req, res) => {
  try {
    // ler dados
    const patients = await Patient.find()

    res.status(200).json(patients)
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.get('/:ra', async (req, res) => {
  // extrair o dado da requisicao pela url = req.params
  const ra = req.params.ra

  try {
    const patient = await Patient.findOne({ ra })

    // ? Criar validações
    if (!patient) {
      res.status(422).json({ message: `Patient with RA: ${ra} not found.` })
      return
    }

    res.status(200).json(patient)
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.patch('/update/:ra', async (req, res) => {
  const { ra } = req.params
  const { name, lastName, birthDate, gender, email, active } = req.body

  const patient = {
    name,
    lastName,
    birthDate,
    gender,
    email,
    active
  }

  try {
    //? Criar validations:
    //? usuario já existente (dados).
    //? usuario nao encontrado.
    //? tipo de dado invalido.
    const updatedPatient = await Patient.updateOne({ ra }, patient)

    if (updatedPatient.matchedCount === 0) {
      res.status(422).json({ message: `Patient with RA: ${ra} not found.` })
      return
    }

    res
      .status(200)
      .json({ message: 'Patient updated successefuly!', patientData: patient })
  } catch (error) {
    res.status(500).json({ error })
  }
})

router.delete('/delete/:ra', async (req, res) => {
  const { ra } = req.params

  const patient = await Patient.findOne({ ra })

  if (!patient) {
    res.status(422).json({ message: `Patient with RA: ${ra} not found.` })
  }

  try {
    await Patient.deleteOne({ ra })

    res.status(200).json({
      message: `Patient with ra: ${ra} deleted successefuly!`
    })
  } catch (error) {
    res.status(500).json({ error })
  }
})
module.exports = router
