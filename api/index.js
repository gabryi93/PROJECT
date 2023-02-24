require('dotenv').config() //cargas las constantes
const mongoose = require('mongoose') // permite la conexion y manipulacion con mongodb-node
const express = require('express') //permite montar el servidor node

//handlers == manejadores ( en los handlers no se suele meter lógica)
const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')
const updateUserHandler = require('./handlers/updateUserHandler')
const infoUser = require('./logic/infoUser')

//incluir librerias,extensiones ...
const jsonBodyParser = require('./utils/jsonBodyParser')
const jwtVerifier = require('./utils/jwtVerifier')
// const prueba = require('./utils/prueba')
// const { user } = require('./models/schemas')


const MONGODB_URL = 'mongodb://127.0.0.1:27017/demo';
const PUERTO = 80;

mongoose.connect(MONGODB_URL)
    .then(() => {
    
        // EJEMPLO BASE DE ENVIAR PETICION/RECIBIR
        const express = require('express')
        const api = express()
        const port = 3001
        const cors = require('./utils/cors');

        //para no tener problemas con los mensaje de orignes desconocidos
        api.use(cors)
     
        //se creean los endpoints

        //autentficar usuarios
        api.post('/users/auth', jsonBodyParser, authenticateUserHandler)

         //registro de usuarios
        api.post('/users', jsonBodyParser, registerUserHandler)

        //listar usuarios
        api.get('/users', jwtVerifier, retrieveUserHandler)

        //obtener la información de un usuario
        api.get('/users/info', (req, res) => {
        

            //guardo en una variable mail del usuario
            let emailUser = req.query.email;

            infoUser(emailUser)
            .then(user => res.send(user))
            .catch(error => {
            })
            
            
        })

        //actualizar información de un usuario
        api.post('/users/update', jsonBodyParser, updateUserHandler)

        //se indica puerto para la escucha
        api.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    })
    .catch(error => console.error(error))


return;