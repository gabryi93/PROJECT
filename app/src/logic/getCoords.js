
import { errors } from 'com'
const { FormatError, AuthError, LengthError, NotFoundError, UnexpectedError } = errors

/**
 * Get position coords about user destination
 * 
 * @param {string} address The user destination
 */
export default function getCoords(method,address,done) {
 
    var xhr = new XMLHttpRequest();
    let key_api = '22ee5545b569d682e0556b1ff866ad25';

    xhr.open(method, 'https://api.positionstack.com/v1/forward?access_key='+key_api+'&query='+address+'&country=ES');
    xhr.onload = function () {
        done(null, xhr.response);
      };
    xhr.onerror = function () {
        done(xhr.response);
    };
    xhr.send();
}