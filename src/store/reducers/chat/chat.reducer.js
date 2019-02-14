import { GET_ALL_MESSAGES } from '../../actions/chat/chat.types';

const initialState = {
    countMessages: 1,
};

const chat = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MESSAGES:
            return {
                countMessages: state.countMessages + 1
            }
        default:
            return state
    }
}

export default chat;