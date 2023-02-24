const updateUser = require('../logic/updateUser')

const { errors: { FormatError, LengthError, ConflictError } } = require('com')

module.exports = (req, res) => {
    
    try {
        //me quedo con el body de la request, que es donde están los parametros que envio desde el cliente
        const { id,name, address,phone } = req.body

        updateUser(id,name, address, phone)
           
            .then(() => res.send({'status':'OK'}))
            .catch(error => {
                if (error instanceof ConflictError)
                    res.status(409).json({ error: error.message })
                else
                    res.status(500).json({ error: error.message })
            })
    } catch (error) {
        if (error instanceof TypeError || error instanceof FormatError || error instanceof LengthError)
            res.status(400).json({ error: error.message })
        else
            res.status(500).json({ error: error.message })
    }
}