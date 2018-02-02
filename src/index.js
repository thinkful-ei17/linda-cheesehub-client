import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/cheese';
import thunk from 'redux-thunk'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddlware(CheeseList))

export default store


ReactDOM.render(
  <Provider store={store}>
  <CheeseList cheeses={cheeses}/> 
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
