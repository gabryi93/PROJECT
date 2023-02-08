require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const await = require('await')

const authenticateUserHandler = require('./handlers/authenticateUserHandler')
const registerUserHandler = require('./handlers/registerUserHandler')
const retrieveUserHandler = require('./handlers/retrieveUserHandler')
const infoUserHandler = require('./logic/infoUser')

const jsonBodyParser = require('./utils/jsonBodyParser')
const jwtVerifier = require('./utils/jwtVerifier')
const prueba = require('./utils/prueba')
const { user } = require('./models/schemas')
const {User} = require('./models')

const MONGODB_URL = 'mongodb://127.0.0.1:27017/demo';
const PUERTO = 80;

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log('estoy aqui')
        console.log(`db connected to ${MONGODB_URL}`)

        // EJEMPLO BASE DE ENVIAR PETICION/RECIBIR
        const express = require('express')
        const api = express()
        const port = 3001

        // var express = require('express')
        // var cors = require('cors')
        const cors = require('./utils/cors')

        // var app = express()

        api.use(cors)

        api.post('/users/auth', jsonBodyParser, authenticateUserHandler)
        api.post('/users', jsonBodyParser, registerUserHandler)

        api.get('/users', jwtVerifier, retrieveUserHandler)

        // api.get('/users/info', jwtVerifier, infoUserHandler)
        api.get('/users/info', (req, res) => {

            
            mongoose.collection('users', function(err, collection) {
            collection.find().toArray(function(err, items) {
                console.log(items);
                res.send(items);
            });
        });
          

            // let email = req.query.email;

            // let response = null;

            // User.find({ email: email }).toArray(function (err, docs) {
            //     res.send(docs)
            // });

            
            
        })

        api.post('/users', jsonBodyParser, registerUserHandler)

        api.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    })
    .catch(error => console.error(error))









return;