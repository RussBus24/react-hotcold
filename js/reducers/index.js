var actions = require('../actions/index');

var initialState = {
    randomNumber: Math.floor(Math.random() * 100) + 1,
    guessArray: [],
    userNumber: null,
    guessFeedback: "Guess a number between 1 and 100.",
    seeModal: false,
    fewestGuess: 100,
    guessid: null
};

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
    else if (action.type === actions.NEW_GAME) {
        var storeFewestGuess = state.fewestGuess;
        return Object.assign({}, state, initialState, {randomNumber: Math.floor(Math.random() * 100) + 1, fewestGuess: storeFewestGuess});
    }
    else if (action.type === actions.GUESS_FEEDBACK) {
        return Object.assign({}, state, {guessFeedback: action.feedback});
    }
    else if (action.type === actions.MODAL_VISIBLE) {
        return Object.assign({}, state, {seeModal: !state.seeModal});
    }
    else if (action.type === actions.UPDATE_FEWEST_GUESSES) {
        return Object.assign({}, state, {fewestGuess: action.fewest});
    }
    else if (action.type === actions.FETCH_GUESSES_SUCCESS) {
        return Object.assign({}, state, {fewestGuess: action.fewest, guessid: action.guessid});
    }
    
    return state;
};

exports.numberReducer = numberReducer;