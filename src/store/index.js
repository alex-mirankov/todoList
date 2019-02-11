import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
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
