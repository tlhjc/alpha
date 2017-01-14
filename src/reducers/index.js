import { combineReducers } from 'redux';
import home from './home.js';
import method from './method.js';
import trainer from './trainer.js';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  home,
  method,
  trainer,
  routing: routerReducer
});

export default rootReducer;
