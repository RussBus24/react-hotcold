//Actions to consider for HotCold app:
//Guess a Number (user input)
//Generate a Number (JS side)
//Validate a Number and inform user appropriately (JS side)
var fetch = require('isomorphic-fetch');

var NEW_GAME = 'NEW_GAME';
var newGame = function() {
    return {
        type: NEW_GAME
    };
};

var GUESS_NUMBER = 'GUESS_NUMBER';
var guessNumber = function(number) {
    return {
        type: GUESS_NUMBER,
        number: number
    };
};

var NEW_RANDOM_NUMBER = 'NEW_RANDOM_NUMBER';
var newRandomNumber = function(number) {
    return {
        type: NEW_RANDOM_NUMBER,
        number: number
    };
};

var VALIDATE_NUMBER = 'VALIDATE_NUMBER';
var validateNumber = function(number) {
    return {
        type: VALIDATE_NUMBER,
        number: number
    };
};

var GUESS_FEEDBACK = 'GUESS_FEEDBACK';
var guessFeedback = function(feedback) {
    return {
        type: GUESS_FEEDBACK,
        feedback: feedback
    };
};

var MODAL_VISIBLE = 'MODAL_VISIBLE';
var modalVisible = function(visible) {
    return {
    type: MODAL_VISIBLE,
    seeModal: visible
    };
};

var FETCH_GUESSES_SUCCESS = 'FETCH_GUESSES_SUCCESS';
var fetchGuessesSuccess = function(fewest) {
    return {
        type: FETCH_GUESSES_SUCCESS,
        fewest: fewest
    };
};

var FETCH_GUESSES_ERROR= 'FETCH_GUESSES_ERROR';
var fetchGuessesError = function(error) {
    return {
        type: FETCH_GUESSES_ERROR,
        error: error
    };
};

var RETRIEVE_FEWEST_GUESSES = 'RETRIEVE_FEWEST_GUESSES';
var retrieveFewestGuesses = function(guesses) {
    return function(dispatch) {
       var url = 'https://vast-depths-38075.herokuapp.com/fewest-guesses';
       return fetch(url).then(function(response) {
           if (response.status < 200 || response.status >= 300) {
            const error = new Error(response.statusText);
            error.response = response;
            throw error;
       }
            return response;
       })
       .then(function (response) {
            return response.json();
       })
       .then(function(data) {
            var fewest = data.fewest;
            return dispatch(
                fetchGuessesSuccess(fewest)
            );
        })
        .catch(function (error) {
            return dispatch(
            fetchGuessesError(error)
            );
        });
    };
};

var POST_RETRIEVE_GUESSES = 'POST_RETRIEVE_GUESSES';
var postRetrieveGuesses = function(guesses) {
    return function(dispatch) {
        var url = 'https://vast-depths-38075.herokuapp.com/fewest-guesses';
        return fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            guessNumber: guesses
          })
       }).then(function() {
           return dispatch(
               retrieveFewestGuesses()
            );
       });
    };
};

exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.MODAL_VISIBLE = MODAL_VISIBLE;
exports.modalVisible = modalVisible;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.NEW_RANDOM_NUMBER = NEW_RANDOM_NUMBER;
exports.newRandomNumber = newRandomNumber;
exports.VALIDATE_NUMBER = VALIDATE_NUMBER;
exports.validateNumber = validateNumber;
exports.GUESS_FEEDBACK = GUESS_FEEDBACK;
exports.guessFeedback = guessFeedback;
exports.RETRIEVE_FEWEST_GUESSES = RETRIEVE_FEWEST_GUESSES;
exports.retrieveFewestGuesses = retrieveFewestGuesses;
exports.POST_RETRIEVE_GUESSES = POST_RETRIEVE_GUESSES;
exports.postRetrieveGuesses = postRetrieveGuesses;
exports.FETCH_GUESSES_SUCCESS = FETCH_GUESSES_SUCCESS;
exports.fetchGuessesSuccess = fetchGuessesSuccess;
exports.FETCH_GUESSES_ERROR = FETCH_GUESSES_ERROR;
exports.fetchGuessesError = fetchGuessesError;