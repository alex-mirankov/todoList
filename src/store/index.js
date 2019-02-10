import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer } from './reducers/login/login.reducer';
import { AppReducers } from './reducers/index';
import { loginMidd } from './middleware/login/login.middleware';

export const Store = createStore(
    AppReducers,
    composeWithDevTools(
        applyMiddleware(
            loginMidd
        )
    )
);
