var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jsonParser = bodyParser.json();

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

var FewestGuesses = require('./models/fewest-guesses');

app.get('/fewest-guesses', function(request, response) {
    response.json({fewest: fewest});
});

app.post('/fewest-guesses', jsonParser, function(request, response) {
    if (!('name' in request.body)) {
        return response.sendStatus(400);
    }

    var item = storage.add(request.body.name);
    response.status(201).json(item);
});