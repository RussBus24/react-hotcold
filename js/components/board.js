var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Game = require('./game');
var GuessCount = require('./guess-count');
var GuessList = require('./guess-list');
var Feedback = require('./feedback');

var Board = React.createClass({
    
    componentDidMount: function() {
      this.props.getFewestGuesses();  
    },
    
    validateNumber: function() {
        var validate = this.refs.userGuess.value;
        this.props.dispatch(actions.validateNumber(validate));
    },
    
    handleSubmit(event) {
        event.preventDefault();
        var g = event.target.userGuess.value;
        var difference = g - this.props.random;
        var margin = Math.abs(difference);
        if (this.props.guesses.includes(g)) {
            console.log(this.props.feedback('You already guessed that!'));
            return;
        }
        else if (margin === 0) {
            var numOfGuesses = this.props.guesses.length + 1;
            this.props.feedback('Correct! You win!! Click New Game to play again.');
            if (numOfGuesses < this.props.fewestGuesses) {
                this.props.fewestGuess(numOfGuesses);
                this.props.fewestGuessNumber(numOfGuesses);
            }
        }
        else if (margin <= 5) {
            this.props.feedback('You are on FIRE!!!');
        }
        else if (margin <= 10) {
            this.props.feedback('HOT!');
        }
        else if (margin <= 30) {
            this.props.feedback('Warm...');
        }
        else if (margin <= 40) {
            this.props.feedback('Cool...');
        }
        else if (margin <= 50) {
            this.props.feedback('COLD!');
        }
        else if (margin <= 90) {
            this.props.feedback('You are in Iceland.');
        }
        //this.props.dispatch(actions.guessNumber(guess));
        this.props.guess(g);
        this.refs.userGuess.value = "";
    },
    
    render: function(props) {
        
        return (
        <section className="game">
			
			<Feedback />

			<form onSubmit={this.handleSubmit}>
				<input type="text" name="userGuess" ref="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required />
      			<input type="submit" ref="guessButton" className="button" name="submit" value="Guess" />
			</form>
			
			<GuessCount guesses={this.props.guessArray} />
			
			<GuessList />

            <p>Current fewest number of guesses: {this.props.fewestGuesses}</p>
		</section>
        );
    }
    
});

var mapStateToProps = function(state, props) {
    return {
        random: state.randomNumber,
        guesses: state.guessArray,
        user: state.userNumber,
        feedback: state.guessFeedback,
        fewestGuesses: state.fewestGuess
    };
};

var mapDispatchToProps = function(dispatch) {
    return {
        guess: function(guess){dispatch(actions.guessNumber(guess))},
        feedback: function(feedback){dispatch(actions.guessFeedback(feedback))},
        fewestGuess: function(fewest){dispatch(actions.updateFewestGuesses(fewest))},
        fewestGuessNumber: function(fewestguess){dispatch(actions.postRetrieveGuesses(fewestguess))},
        getFewestGuesses: function(){dispatch(actions.retrieveFewestGuesses())}
    };
};

var Container = connect(mapStateToProps, mapDispatchToProps)(Board);

module.exports = Container;