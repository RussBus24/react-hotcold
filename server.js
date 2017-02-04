var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jsonParser = bodyParser.json();
var cors = require('cors');

var config = require('./config');

var app = express();
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

var runServer = function(callback) {
    mongoose.connect(config.DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }

        app.listen(config.PORT, function() {
            console.log('Listening on localhost:' + config.PORT);
            if (callback) {
                callback();
            }
        });
    });
};

if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
}

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
    
    FewestGuesses.create({
        guesses: request.body.guessNumber
    }, function (err, fewestguesses) {
        if (err) {
            console.log(err);
            return response.status(500).json({
                message: 'Server Error'
            });
        }
        response.json(fewestguesses);
    });
});

app.put('/fewest-guesses/:id', function(request, response) {
    FewestGuesses.update({_id: request.params.id}, { $set: {guesses: request.body.number}}, function(err, fewestguesses) {
        if (err) {
            return response.status(500).json({
                message: 'A server error occurred.'
            });
        }
        response.json(fewestguesses);
    });
});

exports.app = app;
exports.runServer = runServer;

//app.listen(process.env.PORT || 8080, process.env.IP);