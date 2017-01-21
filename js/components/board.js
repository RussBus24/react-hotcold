var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Game = require('./game');

var Board = React.createClass({
    
    onSubmit: function() {
        
    },
    
    render: function() {
        
        return (
        <div className="board">
            <h1>HOT and COLD</h1>
            <Board />
        </div>
        );
    }
    
});

module.exports = Board;