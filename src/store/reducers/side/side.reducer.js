import { TOGGLE_SIDE } from '../../actions/side/side.types';

const initialState = {
    toggle: true
}

const side = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SIDE:
            return {
                toggle: !state.toggle,
            }
        default:
            return state
    }
}

export default side;
