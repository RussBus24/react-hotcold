//Actions to consider for HotCold app:
//Guess a Number (user input)
//Generate a Number (JS side)
//Validate a Number and inform user appropriately (JS side)


var INPUT_NUMBER = 'INPUT_NUMBER';
var inputNumber = function(number) {
    return {
        type: INPUT_NUMBER,
        number: number
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

var GUESS_FEEDBACK_HOT = 'GUESS_FEEDBACK_HOT';
var guessFeedbackHot = function(feedback) {
    return {
        type: GUESS_FEEDBACK_HOT,
        feedback: feedback
    };
};

var GUESS_FEEDBACK_COLD = 'GUESS_FEEDBACK_COLD';
var guessFeedbackCold = function(feedback) {
    return {
        type: GUESS_FEEDBACK_COLD,
        feedback: feedback
    };
};

exports.INPUT_NUMBER = INPUT_NUMBER;
exports.inputNumber = inputNumber;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.NEW_RANDOM_NUMBER = NEW_RANDOM_NUMBER;
exports.newRandomNumber = newRandomNumber;
exports.VALIDATE_NUMBER = VALIDATE_NUMBER;
exports.validateNumber = validateNumber;
exports.GUESS_FEEDBACK = GUESS_FEEDBACK;
exports.guessFeedback = guessFeedback;
exports.GUESS_FEEDBACK_HOT = GUESS_FEEDBACK_HOT;
exports.guessFeedbackHot = guessFeedbackHot;
exports.GUESS_FEEDBACK_COLD = GUESS_FEEDBACK_COLD;
exports.guessFeedbackCold = guessFeedbackCold;