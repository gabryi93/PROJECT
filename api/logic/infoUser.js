const { errors: { FormatError } } = require('com')
const { User } = require('../models')

function infoUser(email) {
    
   
    return User.findOne({ email: email })
        .then(user => {
            
             if (!user)
                 throw new NotFoundError(`${userId} does not exist`)

               // sanitize
               user.id = user._id.toString()

               delete user._id
   
               return user
        })
}

module.exports = infoUser