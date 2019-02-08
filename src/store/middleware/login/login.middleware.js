import { VERIFY, LOG_IN } from '../../actions/login/login.types';
import { users } from '../../../constants/user';

export const loginMidd = store => next => action => {
    if(action.type === VERIFY) {
        for(let i = 0; i< users.length; i++) {
            if(action.payload === users[i].name) {
                store.dispatch({
                    type: LOG_IN,
                    payload: action.payload
                })
            }
        }
    }
    return next(action);
};
