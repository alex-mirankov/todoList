import { LOG_IN, LOG_OUT, VERIFY } from './';

export function logIn(payload) {
    return {
        type: LOG_IN,
        payload
    }
}

/*export function verifyUser(payload) {
    return {
        type: VERIFY,
        payload
    }
}*/

export function logOut() {
    return {
        type: LOG_OUT
    }
}