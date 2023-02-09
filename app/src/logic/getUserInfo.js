
import { regex, errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError, UnexpectedError } = errors

/**
 * Get info about user
 * 
 * @param {int} email The user email
 */
export default function getUserInfo(method,email,done) {
    

    //antigua
    // return new Promise((resolve, reject) => {
    //     const xhr = new XMLHttpRequest()

    //     xhr.onload = () => {
    //         const { status, responseText: json } = xhr

    //         if (status === 200) {
    //             const { token } = JSON.parse(json)

    //             resolve(token)
    //         } else if (status === 400) {
    //             const { error } = JSON.parse(json)

                
    //         } else if (status === 401) {
    //             const { error } = JSON.parse(json)
               
    //             reject(new AuthError(error))
    //         } else if (status === 404) {
    //             const { error } = JSON.parse(json)
                
    //             reject(new NotFoundError(error))
    //         } else if (status < 500)
    //             reject(new UnexpectedError('client error'))
    //         else
    //             reject(new UnexpectedError('server error'))

    //     }

    //     xhr.onerror = () => reject(new Error('connection error'))


    //     xhr.open('GET', 'http://localhost:3001/users/info?email='+email)
    //     xhr.setRequestHeader('Content-Type', 'application/json')

    //     const payload = { email }

    //     const json = JSON.stringify(payload)
        
    //     xhr.send()
    // })
        
    var xhr = new XMLHttpRequest();
    xhr.open(method, 'http://localhost:3001/users/info?email='+email);
    xhr.onload = function () {
        done(null, xhr.response);
      };
    xhr.onerror = function () {
        done(xhr.response);
    };
    xhr.send();


}