var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Board = require('./board');

var Game = React.createClass({
    
    render: function() {
        
        return (
        <div>
        <header>
			<nav> 
				<ul className="clearfix">
					<li><a className="what" href="#">What ?</a></li>
					<li><a className="new" href="#" onClick={this.props.newGame}>+ New Game</a></li>
				</ul>
			</nav>
			<h1>HOT and COLD</h1>
		</header>
            <Board />
        </div>
        );
    }
});

var mapDispatchToProps = function(dispatch) {
    return {
        newGame: function(newGame){dispatch(actions.newGame())}
    };
};

var Container = connect(null, mapDispatchToProps)(Game);

module.exports = Container;