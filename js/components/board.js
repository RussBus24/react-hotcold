var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Game = require('./game');
var GuessCount = require('./guess-count');
var GuessList = require('./guess-list');

var Board = React.createClass({
    
    validateNumber: function() {
        var validate = this.refs.userGuess.value;
        this.props.dispatch(actions.validateNumber(validate));
    },
    
    handleSubmit(event) {
        var guess = event.target.guessInput.value;
        
        if (this.props.guessArray.includes(guess)) {
            this.props.guessFeedback("You already guessed that!");
            return;
        }

    },
    
    render: function() {
        
        return (
        <section className="game">
			
			<h2 id="feedback">Make your Guess!</h2>

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
        user: state.userNumber
    };
};

var mapDispatchToProps = function(dispatch) {
    
};

var Container = connect(mapStateToProps, mapDispatchToProps)(Board);

module.exports = Container;
module.exports = Board;