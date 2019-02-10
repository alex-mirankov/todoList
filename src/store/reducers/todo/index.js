import { combineReducers } from 'redux';
import todos from './todo.reducer';
import visibilityFilter from './filter.reducer';

export const ToDoAppReducers = combineReducers({
    todos,
    visibilityFilter
});

export default ToDoAppReducers;
