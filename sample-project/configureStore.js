var createStore = require('redux').createStore;
var reducer = require('./reducers');

var store = createStore(reducer);

module.exports = store;