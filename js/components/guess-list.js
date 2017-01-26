var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Board = require('./board');

var GuessList = React.createClass({
    
    render: function(props) {
        return (
            <div>
           <ul id="guessList" className="guessBox clearfix">
               
			</ul>
           </div>
        );
    }
})

module.exports = GuessList;