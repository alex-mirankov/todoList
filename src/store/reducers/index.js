import { combineReducers } from 'redux';
import { loginReducer } from './login/login.reducer';
import rootReducer from './todo/index';
import chat from './chat/chat.reducer';

export const AppReducers = combineReducers({
    user: loginReducer,
    rootReducer,
    chat,
});
