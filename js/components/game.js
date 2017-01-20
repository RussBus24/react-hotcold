var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Board = require('./board');

var Game = React.createClass({
    
    render: function() {
        
        return (
        <div className="game">
            <h1>HOT and COLD</h1>
            <Board />
        </div>
        );
    }
    
});

module.exports = Game;