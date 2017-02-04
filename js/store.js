var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleWare = redux.applyMiddleWare;
var thunk = require('redux-thunk').default;

var reducers = require('./reducers/index');

var store = createStore(reducers.numberReducer, applyMiddleWare(thunk));
module.exports  = store;