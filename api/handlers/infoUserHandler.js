const infoUserHandler = require('../logic/infoUser')

const { errors: { FormatError, NotFoundError } } = require('../../com')

module.exports = (req, res) => {
    
    try {
        const { email } = req
    
        infoUserHandler(email)
            .then(user => res.send(user))
            .catch(error => {
               
            })
    } catch (error) {
        
        if (error instanceof TypeError || error instanceof FormatError)
            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
}