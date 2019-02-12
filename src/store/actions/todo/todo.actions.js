import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO, COUNT_TODO } from './todo.types';

let nextToDoId = 0;

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextToDoId++,
        text,
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id: id
    }
}

export const updateTodo = (id, text) => {
    return {
        type: UPDATE_TODO,
        id,
        text: text
    }
}

export const countToDo = () => {
    return {
        type: COUNT_TODO,
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    }
}
