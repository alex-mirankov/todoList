import { GET_ALL_MESSAGES_ADMIN, DELETE_ALL } from '../../actions/chat/chat.types';

const initialState = {
    countMessages: 1,
    messagesAdmin: [],
    messagesUser: [],
    author: '',
};

const chat = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MESSAGES_ADMIN:
            return {
                messagesUser: state.messagesUser,
                messagesAdmin: action.payload,
                countMessages: action.length,
                author: action.user,
            }
        case DELETE_ALL:
            return {
                messagesAdmin: [],
                messagesUser: [],
                countMessages: 1,
                author: '',
            }
        default:
            return state
    }
}

export default chat;