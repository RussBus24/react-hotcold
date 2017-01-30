var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Board = require('./board');

var GuessList = React.createClass({
    
    render: function(props) {
        let guesses = this.props.guesses.map((guess) => {
            return <li>{guess}</li>;
        });
        
        return (
            <div>
           <ul id="guessList" className="guessBox clearfix">
               {guesses}
			</ul>
           </div>
        );
    }
});

var mapStateToProps = function(state, props) {
    return {
        guesses: state.guessArray
    };
};

var Container = connect(mapStateToProps)(GuessList);

module.exports = Container;
