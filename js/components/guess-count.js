var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Board = require('./board');

var GuessCount = React.createClass({
    
    render: function() {
        return (
            <div>
           <p>Guess #<span id="count">0</span>!</p> 
           </div>
        );
    }
})

module.exports = GuessCount;