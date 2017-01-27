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
					<li><a className="new" href="#">+ New Game</a></li>
				</ul>
			</nav>
		</header>
            <Board />
        </div>
        );
    }
});


var Container = connect()(Game);

module.exports = Game;
module.exports = Container;