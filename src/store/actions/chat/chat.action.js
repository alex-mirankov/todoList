import { GET_ALL_MESSAGES } from './chat.types';

export const getAllMessages = () => {
    return {
        type: GET_ALL_MESSAGES,
    }
}
