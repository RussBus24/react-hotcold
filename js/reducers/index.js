var actions = require('../actions/index');

var initialState = {
    randomNumber: Math.floor(Math.random() * 100) + 1,
    guessArray: [0],
    userNumber: null,
    guessFeedback: "Make your Guess!"
};

var initialNumberState = [];

var numberReducer = function(state, action) {
    state = state || initialState;
    if (action.type === actions.GUESS_NUMBER) {
        var guessArray = state.guessArray.slice();
        guessArray.push(action.number);
        return Object.assign({}, state, {guessArray: guessArray});
    }
    else if (action.type === actions.NEW_RANDOM_NUMBER) {
        var random = Math.floor(Math.random() * 100) + 1;
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
    else if (action.type === actions.GUESS_FEEDBACK) {
        return Object.assign({}, state, {guessFeedback: action.feedback});
    }
    
    return state;
};

exports.numberReducer = numberReducer;