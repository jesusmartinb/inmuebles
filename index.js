// Importamos configuraciones
const config = require('./config/index.config')

// Importamos conexión a base datos
const connection = require('./database/connection')

// Importar dependencias
const express = require('express')

// Config .env
// require('dotenv').config();

// Ejecutar conexión a base datos
connection(config.database)

// Crear servidor de node
const app = express()
const { port } = config.server

// Convertir los datos del body a objetos js
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Cargar configuración de rutas
const inmueble = require('./routes/inmueble.route')

app.use('/api/inmuebles/', inmueble)

// Poner el servidor a escuchar peticiones http
app.listen(port, () => console.log('Escuchando en el puerto: ' + port))
