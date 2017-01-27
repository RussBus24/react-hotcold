var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions/index');
var Board = require('./board');

var GuessList = React.createClass({
    
    render: function(props) {
        
        return (
            <div>
                <h2 id="feedback">{this.props.feedback}</h2>
           </div>
        );
    }
});

var mapStateToProps = function(state, props) {
    return {
        feedback: state.guessFeedback
    };
};

var Container = connect(mapStateToProps)(GuessList);

module.exports = Container;