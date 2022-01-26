import {Action} from './action';

const initialState = {
    dow: 40,
    // hash to tell datbase this is a actual user
    login_hash: "",

    login_page: 0,
    
    canLogIn: false,
};

function reducer(state = initialState, action){
    switch (action.type) {
        case Action.CheckDow:
            return {
                ...state,
                dow: action.payload
            }
        case Action.loginPage:
            return{
                ...state,
                login_page: action.payload
            }
        case Action.loginRequest:
            return{
                ...state,
                canLogIn: action.payload
            }
            default:
                return state;
    }
}

export default reducer;

