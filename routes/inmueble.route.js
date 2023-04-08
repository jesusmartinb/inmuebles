const express = require('express')
const Inmueble = require('../models/inmueble.model')
const router = express.Router()
const { body, validationResult } = require('express-validator');

router.get('/', async (req, res) => {
	const inmuebles = await Inmueble.find()
	res.send(inmuebles)
})

router.get('/:id', async (req, res) => {
	const inmueble = await Inmueble.findById(req.params.id)
	if (!inmueble) return res.status(404).send('No hemos encontrado ningún inmueble con ese ID')

	res.send(inmueble)
})

router.post(
	'/',
	body('piso')
		.isInt()
		.notEmpty().withMessage('Por favor introduzca el número de piso')
		.trim()
		.isLength({ min: 1, max: 1 }).withMessage('Escriba un número entre 1 y 4'),
	body('letra')
		.isString().withMessage('Escriba letras de la A a la D')
		.notEmpty()
		.trim()
		.isLength({ min: 1, max: 1 }).withMessage('Escoja entre A B C D'),
	body('extension')
		.isInt()
		.notEmpty().withMessage('Por favor introduzca un valor númerico')
		.isLength({ min: 60, max: 100 }).withMessage('Introduzca un valor entre 60 y 100'),
	body('habitaciones')
		.isInt()
		.notEmpty()
		.trim()
		.isLength({ min: 1, max: 1 }).withMessage('Escriba un número entre 2 y 4'),
	body('alquilado')
		.isBoolean().withMessage('Por favor escriba "yes" o "no"'),
	body('nombrePropietario')
		.isString()
		.notEmpty().withMessage('Escriba el nombre del propietario')
		.toLowerCase()
		.trim()
		.isLength({ min: 2, max: 80 }).withMessage('El nombre ha de estar entre 2 y 80 caracteres'),
	body('emailContacto')
		.trim()
		.notEmpty().withMessage('El campo email es obligatorio')
		.isEmail().withMessage('Por favor introduzca una dirección de email valida'),
	async (req, res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() })
		}

		const inmueble = new Inmueble({
			piso: req.body.piso,
			letra: req.body.letra,
			extension: req.body.extension,
			habitaciones: req.body.habitaciones,
			alquilado: req.body.alquilado,
			nombrePropietario: req.body.nombrePropietario,
			emailContacto: req.body.emailContacto
		})

		const resultado = await inmueble.save()
		res.status(201).send(resultado)
	})

module.exports = router