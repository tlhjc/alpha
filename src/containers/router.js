import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory,
  applyRouterMiddleware
} from 'react-router';

import App from '../components/app.js';
import Home from './home.js';

import configureStore from '../store/configure_store.js';
const store = configureStore();
const syncedHistory = syncHistoryWithStore(hashHistory, store);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={syncedHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/home' component={Home} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
