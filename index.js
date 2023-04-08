const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use(express.json())

const port = process.env.PORT || 3000

app.listen(port, () => console.log('Escuchando en el puerto: ' + port))

mongoose.connect('mongodb://127.0.0.1:27017/inmueblesUnir')
	.then(() => console.log('Conectado a MongoDB'))
	.catch((error) => console.log('No se ha conectado a MongoDB'))