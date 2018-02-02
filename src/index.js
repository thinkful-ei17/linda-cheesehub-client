import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CheeseList from './components/cheese-list';
import registerServiceWorker from './registerServiceWorker';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/cheese';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(), applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <CheeseList/> 
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
