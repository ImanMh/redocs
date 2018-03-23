const initialState = {
  username: '',
  balance: 0
};

function reducer(state, action) {
  return state || initialState;
}

module.exports = reducer;