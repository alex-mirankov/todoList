import { GET_ALL_MESSAGES_ADMIN, DELETE_ALL, MESSAGE_COUNTER } from '../../actions/chat/chat.types';

const initialState = {
    countMessages: 1,
    messagesAdmin: [],
    author: '',
    count: 0,
};

const chat = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MESSAGES_ADMIN:
            return {
                messagesAdmin: action.payload,
                countMessages: action.length,
                author: action.user,
                count: state.count,
            }
        case MESSAGE_COUNTER:
            return {
                messagesAdmin: state.messagesAdmin,
                countMessages: state.countMessages,
                author: state.author,
                count: action.payload,
            }
        case DELETE_ALL:
            return {
                messagesAdmin: [],
                countMessages: 1,
                author: '',
                count: 0,
            }
        default:
            return state
    }
}

export default chat;