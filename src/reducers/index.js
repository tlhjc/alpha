import { combineReducers } from 'redux';
import home from './home.js';
import method from './method.js';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  home,
  method,
  routing: routerReducer
});

export default rootReducer;
