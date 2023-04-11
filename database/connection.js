// Importar mongoose
const mongoose = require('mongoose')

// Método de conexión
const connection = async () => {
	try {
		await mongoose.connect('mongodb://127.0.0.1:27017/inmueblesUnir')
		console.log('Conectado a MongoDB')
	} catch (error) {
		console.log(error)
		throw new Error('No se ha conectado a MongoDB')
	}
}

// Exportar conexión
module.exports = connection