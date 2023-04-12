// Importar mongoose
const mongoose = require('mongoose')

// Método de conexión
const connection = async ({ protocol, url, username = '', password = '' }) => {
	let dburl = '';

	// Require auth
	if (username && password) {
		dburl = `${protocol}://${username}:${password}@${url}`
	} else {
		dburl = `${protocol}://${url}`
	}

	try {
		await mongoose.connect(dburl)
		console.log('Conectado a MongoDB')
	} catch (error) {
		console.log(error)
		throw new Error('No se ha conectado a MongoDB')
	}
}

// Exportar conexión
module.exports = connection