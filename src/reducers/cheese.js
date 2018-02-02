import {FETCH_CHEESES_REQUEST, FETCH_CHEESES_SUCCESS, FETCH_CHEESES_ERROR} from './actions';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch(action.type) {
      case 'FETCH_CHEESES_REQUEST': {
        return Object.assign({}, state, {
          loading: true
        })
      }
      break;
      case 'FETCH_CHEESES_SUCCESS': {
        return Object.assign({}, state, {
          loading: false,
          error: null,
          cheeses: [...state.cheeses, action.cheeses]
        })
      }
      break;
      case 'FETCH_CHEESES_ERROR': {
        return Object.assign({}, state, {
          loading: false,
          error: action.error
        })
      }
      break;
      default:
        return state
    }
}
     