import { GET_ALL_MESSAGES_ADMIN, GET_ALL_MESSAGES_USER, DELETE_ALL } from '../../actions/chat/chat.types';

const initialState = {
    countMessages: 1,
    messagesAdmin: [],
    messagesUser: []
};

const chat = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MESSAGES_ADMIN:
            return {
                messagesUser: state.messagesUser,
                messagesAdmin: action.payload,
                countMessages: action.length,
            }
        case GET_ALL_MESSAGES_USER:
            return {
                messagesAdmin: state.messagesAdmin,
                messagesUser: action.payload,
                countMessages: action.length,
            }
        case DELETE_ALL:
            return {
                messagesAdmin: [],
                messagesUser: [],
                countMessages: 1,
            }
        default:
            return state
    }
}

export default chat;