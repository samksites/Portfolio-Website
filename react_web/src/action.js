export const Action = Object.freeze({
    CheckDow: 'CheckDow',
});

export function checkDow(dow){
    return {
        type: Action.CheckDow,
        payload: dow,
    };
}