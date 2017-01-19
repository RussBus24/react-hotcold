var redux = require('redux');
var createStore = redux.createStore;

var reducers = require('./reducers/index');

var store = createStore(reducers.numberReducer);
module.exports  = store;