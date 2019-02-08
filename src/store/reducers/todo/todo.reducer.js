import { ADD_TODO } from '../../actions'

const initialState = {
    todoItems: [],
}

export function todoReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
    }
}