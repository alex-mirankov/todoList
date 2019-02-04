import { LOG_IN, LOG_OUT } from './';

export function logIng(payload) {
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