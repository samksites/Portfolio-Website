export const Action = Object.freeze({
    CheckDow: 'CheckDow',
    loginPage: 'loginPage',


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