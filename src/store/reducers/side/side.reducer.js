import { TOGGLE_SIDE, SHOW_CHAT, SHOW_TODO } from '../../actions/side/side.types';

const initialState = {
    toggle: true,
    showTodo: false,
    showChat: false,
}

const side = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDE:
            return {
                showChat: state.showChat,
                showTodo: state.showTodo,
                toggle: !state.toggle,
            }
        case SHOW_CHAT:
            return {
                showChat: !state.showChat,
                showTodo: state.showTodo,
                toggle: state.toggle,
            }
        case SHOW_TODO:
            return {
                showChat: state.showChat,
                showTodo: !state.showTodo,
                toggle: state.toggle,
            }
        default:
            return state
    }
}

export default side;
