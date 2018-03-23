var combineReducers = require('redux').combineReducers;
var user = require('./user');
var cart = require('./cart');

var rootReducer = combineReducers({
  user: user,
  cart: cart
});

module.exports = rootReducer;
