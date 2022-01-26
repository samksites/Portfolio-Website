export const Action = Object.freeze({
    CheckDow: 'CheckDow',
    loginPage: 'loginPage',
    loginRequest: 'loginRequest',

});

export function checkDow(dow){
    return {
        type: Action.CheckDow,
        payload: dow,
    };
}

export function log(login){
    return {
        type: Action.loginPage,
        payload: login,
    };
}

export function logIn(loginResult){
    return {
        type: Action.loginRequest,
        payload: loginResult,
    };

}