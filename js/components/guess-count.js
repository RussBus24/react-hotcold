var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Board = require('./board');

var GuessCount = React.createClass({
    
    render: function() {
        return (
            <div>
           <p>Guess #<span id="count">{this.props.guesses.length}</span>!</p> 
           </div>
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

var Container = connect(mapStateToProps)(GuessCount);

module.exports = Container;