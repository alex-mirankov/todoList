import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginReducer } from './reducers/login/login.reducer';
import { loginMidd } from './middleware/login/login.middleware';

export const Store = createStore(
    loginReducer,
    composeWithDevTools(
        applyMiddleware(
            loginMidd
        )
    )
);
