import {FETCH_CHEESES_REQUEST, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_ERROR} from '../actions/cheese';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_CHEESES_REQUEST: 
      console.log("Action fetch cheeses request through reducer ran");
        return Object.assign({}, state, {
          loading: true
        })
      case FETCH_CHEESES_SUCCESS:
      console.log("Action fetch cheeses success through reducer ran");
      console.log("what is in state now", state);
      console.log("what is in action now", action);
      console.log("what is in action cheeses", action.cheeses);
        return Object.assign({}, state, {
          loading: false,
          error: null,
          cheeses: action.cheeses,
        })
      case FETCH_CHEESES_ERROR:
        return Object.assign({}, state, {
          loading: false,
          error: action.error
        })
      default:
        return state
    }
}
     