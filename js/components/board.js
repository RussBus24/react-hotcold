var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Game = require('./game');
var GuessCount = require('./guess-count');
var GuessList = require('./guess-list');
var Feedback = require('./feedback');

var Board = React.createClass({
    
    validateNumber: function() {
        var validate = this.refs.userGuess.value;
        this.props.dispatch(actions.validateNumber(validate));
    },
    
    handleSubmit(event) {
        event.preventDefault();
        var g = event.target.userGuess.value;
        
        if (this.props.guesses.includes(g)) {
            console.log(this.props.feedback('You already guessed that!'));
            return;
        }
        //this.props.dispatch(actions.guessNumber(guess));
        this.props.guess(g);
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

		</section>
        );
    }
    
});

var mapStateToProps = function(state, props) {
    return {
        random: state.randomNumber,
        guesses: state.guessArray,
        user: state.userNumber,
        feedback: state.guessFeedback
    };
};

var mapDispatchToProps = function(dispatch) {
    return {
        guess: function(guess){dispatch(actions.guessNumber(guess))},
        feedback: function(feedback){dispatch(actions.guessFeedback(feedback))}
    };
};

var Container = connect(mapStateToProps, mapDispatchToProps)(Board);

module.exports = Container;