var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Board = require('./board');
var Modal = require('./modal');

var Game = React.createClass({
    
    render: function() {
        
        return (
        <div>
        <header>
			<nav> 
				<ul className="clearfix">
					<li><a className="what" href="#" onClick={this.props.seeModal}>What ?</a></li>
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

var mapStateToProps = function(state) {
    return {
        modal: state.seeModal
    };
};

var mapDispatchToProps = function(dispatch) {
    return {
        newGame: function(newGame){dispatch(actions.newGame())},
        seeModal: function(seeModal){dispatch(actions.modalVisible())}
    };
};

var Container = connect(mapStateToProps, mapDispatchToProps)(Game);

module.exports = Container;