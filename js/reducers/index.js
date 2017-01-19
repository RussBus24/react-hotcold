var actions = require('../actions/index');

var initialNumberState = [];

var numberReducer = function(state, action) {
    state = state || initialNumberState;
    if (action.type === actions.INPUT_NUMBER) {
        return state.concat({
            type: action.type,
            number: action.number
        });
    }
    else if (action.type === actions.GUESS_NUMBER) {
        return state.concat({
            type: action.type,
            number: action.number
        });
    }
    else if (action.type === actions.NEW_RANDOM_NUMBER) {
        return state.concat({
            type: action.type,
            number: action.number
        });
    }
    else if (action.type === actions.VALIDATE_NUMBER) {
        return state.concat({
            type: action.type,
            number: action.number
        });
    }
    
    return state;
};

exports.numberReducer = numberReducer;