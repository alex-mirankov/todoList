import { combineReducers } from 'redux';
import { loginReducer } from './login/login.reducer';
import visibilityFilter from './todo/filter.reducer';
import todos from './todo/todo.reducer';

export const AppReducers = combineReducers({
    user: loginReducer,
    visibilityFilter,
    todos
});
