import { combineReducers } from 'redux';
import { loginReducer } from './login/login.reducer';

export const UserAppReducers = combineReducers({
    user: loginReducer
});
