import { GET_ALL_MESSAGES, SET_MESSAGES, DELETE_ALL } from './chat.types';

export const saveMessage = (mes) => {
    return {
        type: SET_MESSAGES,
        mes
    }
}

export const getAllMessages = (payload, length) => {
    return {
        type: GET_ALL_MESSAGES,
        payload,
        length
    }
}

export const deleteAll = () => {
    return {
        type: DELETE_ALL
    }
}
