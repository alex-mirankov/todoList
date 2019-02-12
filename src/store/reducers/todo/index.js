import { combineReducers } from 'redux';
import todos from './todo.reducer';
import counter from './count.reducer';
import side from '../side/side.reducer';

export default combineReducers({
    todos,
    counter,
    side
});
