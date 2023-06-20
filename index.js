// ! ALTERAR NOME DO ARQUIVO PARA service.js

// config inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const patientRouters = require('./src/routers/patientRouters')

// forma de ler JSON / middlewares
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

// rotas API
app.use('/patient', patientRouters)

// rota inicial / endpoint
app.get('/', (req, res) => {
  // mostrar req

  res.json({ message: 'Hello Express!' })
})

// entregar uma porta
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apicluster.fvvowt3.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  ) // Database connection
  .then(() => {
    console.log('Connection to MongoDB [SUCCESS]')
    app.listen(3000)
  })
  .catch(err => console.log(err))
