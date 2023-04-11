// Importaciones
const Inmueble = require('../models/inmueble.model')
const { validationResult } = require('express-validator');
const { isValidObjectId } = require('mongoose');

// Obtener todos los registros
const all = async (req, res) => {
	const inmuebles = await Inmueble.find()
	res.send(inmuebles)
}

// Obtener un registro por ID
const one = async (req, res) => {
	const inmueble = await Inmueble.findById(isValidObjectId(req.params.id) ? req.params.id : null)
	if (!inmueble) return res.status(404).send('No hemos encontrado ningún inmueble con ese ID')

	res.send(inmueble)
}

// Insertar un nuevo registro
const register = async (req, res) => {
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
}

// Actualizar un registro
const update = async (req, res) => {
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() })
	}

	const inmueble = await Inmueble.findByIdAndUpdate(isValidObjectId(req.params.id) ? req.params.id : null, {
		piso: req.body.piso,
		letra: req.body.letra,
		extension: req.body.extension,
		habitaciones: req.body.habitaciones,
		alquilado: req.body.alquilado,
		nombrePropietario: req.body.nombrePropietario,
		emailContacto: req.body.emailContacto
	},
		{
			new: true
		})

	if (!inmueble) {
		return res.status(404).send('El inmueble con ese ID no existe')
	}

	res.status(204).send()
}

// Borrar un registro
const erase = async (req, res) => {

	const inmueble = await Inmueble.findByIdAndDelete(isValidObjectId(req.params.id) ? req.params.id : null)

	if (!inmueble) {
		return res.status(404).send('El inmueble con ese ID no existe, no se puede borrar')
	}

	res.status(200).send('Inmueble borrado')
}

module.exports = {
	all,
	one,
	register,
	update,
	erase
}