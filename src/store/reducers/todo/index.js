import { combineReducers } from 'redux';
import todos from './todo.reducer';
import visibilityFilter from './filter.reducer';

export default combineReducers({
    todos,
    visibilityFilter
});
