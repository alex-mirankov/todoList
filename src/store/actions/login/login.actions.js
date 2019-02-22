import { LOG_IN, LOG_OUT } from './login.types';

export function logIn(payload) {
    return {
        type: LOG_IN,
        payload
    }
}

export function logOut() {
    return {
        type: LOG_OUT
    }
}