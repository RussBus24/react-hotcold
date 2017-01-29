var mongoose = require('mongoose');


var guessSchema = new mongoose.Schema({
       guesses: Number
    });
    
var FewestGuesses = mongoose.model('FewestGuesses', guessSchema);

module.exports = FewestGuesses;