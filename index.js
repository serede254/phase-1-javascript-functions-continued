function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(action="go to the office"){
    return `This Monday, I will ${action}.`
}
function wrapAdjective(outer="*"){
    return function (inner="special"){
    return `You are ${outer}${inner}${outer}!`;
}
}