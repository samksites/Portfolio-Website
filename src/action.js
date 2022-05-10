export const Action = Object.freeze({
    loginPage: 'loginPage',
    loginRequest: 'loginRequest',
    newPas: 'newPas',


});

// Creates action for the login form passed in what state the login form should be at
export function log(login){
    
    return {
        type: Action.loginPage,
        payload: login,
    };
}

// passed in if the user submited correct username and password
export function logIn(loginResult){
    return {
        type: Action.loginRequest,
        payload: loginResult,
    };

}

// passed in if the user submited correct username and password
export function passWord(pas){
    console.log(pas);
    return {
        type: Action.newPas,
        payload: pas,
    };

}