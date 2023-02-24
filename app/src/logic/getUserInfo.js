
import { regex, errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError, UnexpectedError } = errors

/**
 * Get info about user
 * 
 * @param {int} email The user email
 */
export default function getUserInfo(method,email,done) {

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