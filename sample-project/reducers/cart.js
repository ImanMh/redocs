const initialState = {
  items: [],
  address: null,
  coupon: null
};

function reducer(state, action) {
  return state || initialState;
}

module.exports = reducer;