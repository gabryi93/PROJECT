import { regex, errors } from 'com'
import 'react-notifications-component/dist/theme.css'
import { Store } from 'react-notifications-component';

const {  HAS_SPACES_REGEX, IS_ALPHABETICAL_REGEX } = regex

const {  ConflictError, UnexpectedError } = errors



const errorLength = (type,longitud) => {
    
    Store.addNotification({
        title: "Error!",
        message: type+" debe contener minimo " + longitud + " carácteres",
        type: "danger",
        insert: "top",
        container: "top-right",
        animation : ["bounce_in"],
        // animationIn: ["bounce_in"],
        // animationOut: ["bounce_out"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
}

const errorString = (type) => {
    
    Store.addNotification({
        title: "Error!",
        message: type+" debe ser texto",
        type: "danger",
        insert: "top",
        container: "top-right",
        animation : ["bounce_in"],
        // animationIn: ["bounce_in"],
        // animationOut: ["bounce_out"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
}

const errorEspacios = () => {
    
    Store.addNotification({
        title: "Error!",
        message: "La contraseña no debe de contener espacios",
        type: "danger",
        insert: "top",
        container: "top-right",
        animation : ["bounce_in"],
        // animationIn: ["bounce_in"],
        // animationOut: ["bounce_out"],
        dismiss: {
          duration: 3000,
          onScreen: true
        }
      });
}




/**
 * Registers a user
 *
 * @param {string} name The user name 
 * @param {string} email The user email
 * @param {string} password The user password
 */
export default function registerUser(name, email, password) {
    
    if (typeof name !== 'string' || !IS_ALPHABETICAL_REGEX.test(name)) {
        errorString('Usuario')
    } 
   
    if (name.length < 1){
        errorLength('Usuario',1)
    }

    if (typeof email !== 'string') {
        errorString('Email')
    }
    // if (!IS_EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    if (typeof password !== 'string') {
        errorString('Email')
    }
    if (password.length < 8) {
        errorLength('Contraseña',8)
    }
    if (HAS_SPACES_REGEX.test(password)) {
        errorEspacios()
    }

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest()

        xhr.onload = () => {
            const { status, responseText: json } = xhr

            if (status === 201)
                resolve()
            else if (status === 400) {
                // const { error } = JSON.parse(json)

                // if (error.includes('is not a'))
                //     reject(new TypeError(error))
                // else if (error.includes('valid') || error.includes('spaces'))
                //     // reject(new FormatError(error))
                // else if (error.includes('length'))
                //     test();
                    // reject(new LengthError(error))
            } else if (status === 409) {
                const { error } = JSON.parse(json)

                reject(new ConflictError(error))
            } else if (status < 500)
                reject(new UnexpectedError('client error'))
            else
                reject(new UnexpectedError('server error'))
        }

        xhr.onerror = () => reject(new Error('connection error'))

        xhr.open('POST', 'http://127.0.0.1:3001/users')
        xhr.setRequestHeader('Content-Type', 'application/json')

        const payload = { name, email, password }

        const json = JSON.stringify(payload)

        xhr.send(json)
    })
}
