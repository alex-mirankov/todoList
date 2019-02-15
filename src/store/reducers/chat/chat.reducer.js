import { GET_ALL_MESSAGES, SET_MESSAGES, DELETE_ALL } from '../../actions/chat/chat.types';

const initialState = {
    countMessages: 1,
    messages: []
};

const chat = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MESSAGES:
            return {
                messages: action.payload,
                countMessages: action.length,
            }
        case SET_MESSAGES:
            return {
                messages: action.mes,
            }
        case DELETE_ALL:
            return {
                countMessages: 0,
            }
        default:
            return state
    }
}

export default chat;