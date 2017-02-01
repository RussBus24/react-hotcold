var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jsonParser = bodyParser.json();

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

var createStorage = function() {
    
};

var storage = createStorage();

var FewestGuesses = require('./models/fewest-guesses');

app.get('/fewest-guesses', function(request, response) {
    FewestGuesses.find(function(err, fewestguesses) {
        if (err) {
            return response.status(500).json({
                message: 'A server error occured.'
            });
        }
    response.json(fewestguesses);
    });
});

app.post('/fewest-guesses', function(request, response) {
    FewestGuesses.update(function(err, fewestguesses) {
        if (err) {
            return response.status(500).json({
                message: 'A server error occurred.'
            });
        }
        response.json(fewestguesses);
    });
});

app.put('/fewest-guesses/:number', function(request, response) {
    FewestGuesses.update({guesses: request.params.number}, function(err, fewestguesses) {
        if (err) {
            return response.status(500).json({
                message: 'A server error occurred.'
            });
        }
        response.json(fewestguesses);
    });
});

app.listen(process.env.PORT || 8080, process.env.IP);