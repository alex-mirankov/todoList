import { ADD_TODO, DELETE_TODO } from '../../actions/todo/todo.types';

const initialState = {
    count: 0
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                count: state.count + 1
            }
        case DELETE_TODO:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

export default counter;