import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppReducers } from './reducers/index';

export const Store = createStore(
    AppReducers,
    composeWithDevTools()
);
