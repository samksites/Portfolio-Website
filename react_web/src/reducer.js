import {Action} from './action';

const initialState = {
    // hash to tell datbase this is a actual user
    login_hash: "",
    // For the login screen 0 = no login screen 1 = pull up login screen 2 = close screen
    login_page: {loginError:false, loginState:0},
    
    // if the user is loged in or not allows users to acceses other items of the page
    isLoggedIn: false,

    thePassword: undefined,
};

// reducer for changing state
function reducer(state = initialState, action){

    
    switch (action.type) {
        // changes the state of what login page looks like
        case Action.loginPage:
            return{
                ...state,
                login_page: action.payload
            }
        // loads if the users username and password was found. 
        case Action.loginRequest:
            return{
                ...state,
                isLoggedIn: action.payload
            }

        case Action.newPas:
            
            return{
                ...state,
                passthePasswordword: action.payload
            }
            default:
                return state;
    }
}

export default reducer;

