// Importamos conexión a base datos
const connection = require('./database/connection')

// Importar dependencias
const express = require('express')

// Ejecutar conexión a base datos
connection()

// Crear servidor de node
const app = express()
const port = process.env.PORT || 3000

// Convertir los datos del body a objetos js
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Cargar configuración de rutas
const inmueble = require('./routes/inmueble.route')

app.use('/api/inmuebles/', inmueble)

// Poner el servidor a escuchar peticiones http
app.listen(port, () => console.log('Escuchando en el puerto: ' + port))
