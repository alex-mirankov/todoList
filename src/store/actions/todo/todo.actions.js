import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from './todo.types';

let nextToDoId = 0;

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextToDoId++,
        text
    }
}

export const setVisibility = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}
