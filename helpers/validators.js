const { body } = require('express-validator')

const toCheck = () => {
	return [
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
			.isLength({ min: 2, max: 3 }).withMessage('Introduzca un valor entre 60 y 100'),
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
			.isLength({ min: 6, max: 100 }).withMessage('El email ha de tener entre 6 y 100 caracteres')
			.isEmail().withMessage('Por favor introduzca una dirección de email valida')
	]
}

module.exports = {
	toCheck
}