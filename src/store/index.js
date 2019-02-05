import { createStore, applyMiddleware, compose } from 'redux';
import { UserAppReducers } from './reducers/index';

export const Store = createStore(
    UserAppReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);