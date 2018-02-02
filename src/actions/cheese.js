export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => {
  type: FETCH_CHEESES_REQUEST
}

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = () => {
  type: FETCH_CHEESES_SUCCESS
}

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = () => {
  type: FETCH_CHEESES_ERROR
}

export const fetchCheeses = (cheeses) => (dispatch) => {
  dispatch(fetchCheesesRequest());
  return fetch('${API_BASE_URL}/api/cheeses')
  .then(response =>  response.json())
  .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
  .catch(error => dispatch(fetchCheesesError(error)))
}