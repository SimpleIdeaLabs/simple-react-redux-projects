import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

// Use Middleware with Store
const storeWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={storeWithMiddleware(reducers)}>
    <App />
  </Provider>
, document.getElementById('root'));
