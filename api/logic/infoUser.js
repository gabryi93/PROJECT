const { errors: { FormatError } } = require('com')
const { User } = require('../models')

function infoUser(email) {
    // if (typeof userId !== 'string') throw new TypeError('userId is not a string')
    // if (!userId.length) throw new FormatError('userId is empty')
    
    return User.findOne({ email: email })
        .then(user => {
            
             if (!user)
                 throw new NotFoundError(`${userId} does not exist`)

               // sanitize
               user.id = user._id.toString()

               delete user._id

               let test = {'email':user.email,'name':user.name}
   
               return test
        })
}

module.exports = infoUser