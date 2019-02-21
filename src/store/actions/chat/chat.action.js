import { GET_ALL_MESSAGES_ADMIN, DELETE_ALL, MESSAGE_COUNTER } from './chat.types';

export const getAllMessagesAdmin = (payload, length, user) => {
    return {
        type: GET_ALL_MESSAGES_ADMIN,
        payload,
        length,
        user,
    }
}

export const counterMessages = (payload) => {
    return {
        type: MESSAGE_COUNTER,
        payload,
    }
}

export const deleteAll = () => {
    return {
        type: DELETE_ALL
    }
}
