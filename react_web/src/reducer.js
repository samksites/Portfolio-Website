import {Action} from './action';

const initialState = {
    dow: 40
};

function reducer(state = initialState, action){

    switch (action.type) {
        case Action.CheckDow:
            return {
                ...state,
                dow: action.payload
            }
            default:
                return state;
    }
}

export default reducer;

