import { TOGGLE_SIDE, SHOW_CHAT, SHOW_TODO } from './side.types';

export const toggleSide = () => {
    return {
        type: TOGGLE_SIDE
    }
}

export const showChat = () => {
    return {
        type: SHOW_CHAT
    }
}

export const showTodo = () => {
    return {
        type: SHOW_TODO
    }
}
