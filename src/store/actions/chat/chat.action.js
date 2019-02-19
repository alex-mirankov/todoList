import { GET_ALL_MESSAGES_ADMIN, GET_ALL_MESSAGES_USER, DELETE_ALL } from './chat.types';

export const getAllMessagesAdmin = (payload, length) => {
    return {
        type: GET_ALL_MESSAGES_ADMIN,
        payload,
        length
    }
}

export const getAllMessagesUser = (payload, length) => {
    return {
        type: GET_ALL_MESSAGES_USER,
        payload,
        length
    }
}

export const deleteAll = () => {
    return {
        type: DELETE_ALL
    }
}
