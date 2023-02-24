import { regex, errors } from 'com'

const { IS_EMAIL_REGEX, HAS_SPACES_REGEX, IS_ALPHABETICAL_REGEX } = regex

const { FormatError, LengthError, ConflictError, UnexpectedError } = errors

/**
 * Actualiza a user
 *
 * @param {int} id The user id 
 * @param {string} name The user name 
 * @param {string} address The user address
 * @param {int} phone The user phone

 */
export default function updateUser(id,name, address, phone) {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest()

        xhr.onload = () => {
            const { status, responseText: json } = xhr

            if (status === 201)
                resolve()
            else if (status === 400) {
                const { error } = JSON.parse(json)

                if (error.includes('is not a'))
                    reject(new TypeError(error))
                else if (error.includes('valid') || error.includes('spaces'))
                    reject(new FormatError(error))
                else if (error.includes('length'))
                    reject(new LengthError(error))
            } else if (status === 409) {
                const { error } = JSON.parse(json)

                reject(new ConflictError(error))
            } else if (status < 500)
                reject(new UnexpectedError('client error'))
            else
                reject(new UnexpectedError('server error'))
        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('POST', 'http://127.0.0.1:3001/users/update')
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { id,name,phone,address}
        
        const json = JSON.stringify(payload)
        
        xhr.send(json)
    })
}