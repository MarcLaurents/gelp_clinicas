const router = require('express').Router();
const controller = require('../controllers/student');

router.get('/', (req, res) => controller.getAll(req, res));
router.get('/:ra', (req, res) => controller.getOne(req, res));
router.post('/', (req, res) => controller.create(req, res));
router.put('/:ra', (req, res) => controller.update(req, res));
router.delete('/:ra', (req, res) => controller.remove(req, res));

// CREATE - MedicalStudent data insert to DB
// router.post('/create', async (req, res) => {
//   // req.body
//   const { ra, name, lastName, birthDate, gender, email, active } = req.body

//   // validacoes
//   if (!ra) {
//     res.status(422).json({ error: 'RA is required!' })
//     return
//   }

//   const medicalStudent = {
//     ra,
//     name,
//     lastName,
//     birthDate,
//     gender,
//     email,
//     active
//   }

//   // create
//   try {
//     // criando dados
//     await MedicalStudent.create(medicalStudent)

//     res.status(201).json({ message: 'Medical Student inserted successefully!' })
//   } catch (error) {
//     res.status(500).json({ error })
//   }
// })

// // READ - Show MedicalStudent data from DB
// router.get('/read', async (req, res) => {
//   try {
//     // ler dados
//     const medicalStudents = await MedicalStudent.find()

//     res.status(200).json(medicalStudents)
//   } catch (error) {
//     res.status(500).json({ error })
//   }
// })

// router.get('/:ra', async (req, res) => {
//   // extrair o dado da requisicao pela url = req.params
//   const ra = req.params.ra

//   try {
//     const medicalStudent = await MedicalStudent.findOne({ ra })

//     // ? Criar validações
//     if (!medicalStudent) {
//       res
//         .status(422)
//         .json({ message: `Medical Student with RA: ${ra} not found.` })
//       return
//     }

//     res.status(200).json(medicalStudent)
//   } catch (error) {
//     res.status(500).json({ error })
//   }
// })

// router.patch('/update/:ra', async (req, res) => {
//   const { ra } = req.params
//   const { name, lastName, birthDate, gender, email, active } = req.body

//   const medicalStudent = {
//     name,
//     lastName,
//     birthDate,
//     gender,
//     email,
//     active
//   }

//   try {
//     //? Criar validations:
//     //? usuario já existente (dados).
//     //? usuario nao encontrado.
//     //? tipo de dado invalido.
//     const updatedMedical = await MedicalStudent.updateOne(
//       { ra },
//       medicalStudent
//     )

//     if (updatedMedical.matchedCount === 0) {
//       res
//         .status(422)
//         .json({ message: `Medical Student with RA: ${ra} not found.` })
//       return
//     }

//     res.status(200).json({
//       message: 'Medical Student updated successefuly!',
//       medicalStudentData: medicalStudent
//     })
//   } catch (error) {
//     res.status(500).json({ error })
//   }
// })

// router.delete('/delete/:ra', async (req, res) => {
//   const { ra } = req.params

//   const medicalStudent = await MedicalStudent.findOne({ ra })

//   if (!medicalStudent) {
//     res
//       .status(422)
//       .json({ message: `Medical Student with RA: ${ra} not found.` })
//   }

//   try {
//     await MedicalStudent.deleteOne({ ra })

//     res.status(200).json({
//       message: `Medical Student with ra: ${ra} deleted successefuly!`
//     })
//   } catch (error) {
//     res.status(500).json({ error })
//   }
// })

module.exports = router
