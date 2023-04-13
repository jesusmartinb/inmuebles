const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const inmuebleSchema = new mongoose.Schema({
	piso: {
		type: Number,
		required: true,
		min: 1,
		max: 4
	},
	letra: {
		type: String,
		required: true,
		uppercase: true,
		trim: true,
		minLength: 1,
		maxLength: 1,
		enum: ["A", "B", "C", "D"]
	},
	extension: {
		type: Number,
		required: true,
		min: 60,
		max: 100,
	},
	habitaciones: {
		type: Number,
		required: true,
		min: 2,
		max: 4,
		enum: [2, 3, 4]
	},
	alquilado: {
		type: Boolean,
	},
	nombrePropietario: {
		type: String,
		required: true,
		lowercase: true,
		trim: true,
		minLength: 2,
		maxLength: 80
	},
	emailContacto: {
		type: String,
		required: true,
		lowercase: true,
		trim: true,
		minLength: 6,
		maxLength: 100
	}
},
	{
		timestamps: true
	})


inmuebleSchema.plugin(mongoosePaginate)

const Inmueble = mongoose.model('inmueble', inmuebleSchema)

module.exports = Inmueble