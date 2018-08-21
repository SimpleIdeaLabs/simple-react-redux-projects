import store from './store';
import AppRoutes from './AppRoutes';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}

export default App;
