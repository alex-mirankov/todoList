import { ADD_TODO } from './todo.types';

let nextToDoId = 0;

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextToDoId++,
        text
    }
}