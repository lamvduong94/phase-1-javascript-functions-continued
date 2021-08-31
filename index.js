// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

const wrapAdjective = function(wrapped = "*") {
    return function(thingToAdd = 'special') {
        return `You are ${wrapped}${thingToAdd}${wrapped}!`;
    }
}