import { VERIFY, LOG_IN } from '../../actions';
import { users } from '../../../constants';

export const loginMidd = store => next => action => {
    if(action.type === VERIFY) {
        for(let i = 0; i< users.lenght; i++) {
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
