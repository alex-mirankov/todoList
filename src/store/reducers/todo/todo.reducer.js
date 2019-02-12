import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from '../../actions/todo/todo.types';

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case UPDATE_TODO:
            return state.map((todo) =>
                (todo.id === action.id)
                    ? { text: action.text }
                    : todo
            )
        default:
            return state
    }
}

export default todos;
