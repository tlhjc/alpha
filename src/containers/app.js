import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Home from './home.js';

import configureStore from '../store/configure_store.js';
const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
