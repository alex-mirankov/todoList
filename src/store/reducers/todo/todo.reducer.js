import { ADD_TODO, TOGGLE_TODO } from '../../actions'

const initialState = {
    todoItems: [],
}

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return [
                ...state, {
                    completed: !state.completed
                }
            ]
        default:
            return state
    }
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id)
                ? {...todo, completed: !todo.completed}
                : todo
            )
        default:
            return state
    }
}

export default todos;
