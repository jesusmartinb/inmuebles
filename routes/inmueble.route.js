const express = require('express')
const Inmueble = require('../models/inmueble.model')
const router = express.Router()

router.get('/', async (req, res) => {
	const inmuebles = await Inmueble.find()
	res.send(inmuebles)
})

router.get('/:id', async (req, res) => {
	const inmueble = await Inmueble.findById(req.params.id)
	if (!inmueble) return res.status(404).send('No hemos encontrado ningún inmueble con ese ID')

	res.send(inmueble)
})

module.exports = router