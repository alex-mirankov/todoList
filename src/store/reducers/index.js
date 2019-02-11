import { combineReducers } from 'redux';
import { loginReducer } from './login/login.reducer';
import rootReducer from './todo/index';

export const AppReducers = combineReducers({
    user: loginReducer,
    rootReducer
});
