const {
    errors: { FormatError, LengthError, ConflictError, UnexpectedError },
    regex: { IS_EMAIL_REGEX, HAS_SPACES_REGEX, IS_ALPHABETICAL_REGEX }
} = require('com')
const { User } = require('../models')

function updateUser(id, name, address, phone) {
 
    return User.updateOne({_id: id},{  $set: {'name': name, 'address': address ,'phone':phone} })
         .catch(error => {
            if (error.message.includes('E11000'))
                throw new ConflictError(`Ha ocurrido un error al actualizar el user`)

            throw new UnexpectedError(error.message)
        })
}

module.exports = updateUser