import { connect } from 'react-redux';
import Home from '../components/home';

import * as HomeActions from '../actions/home.js';
import { routerActions } from 'react-router-redux';
const Actions = {...HomeActions, ...routerActions};

function mapStateToProps (state) {

  return state;
}

export default connect(mapStateToProps, Actions)(Home);
