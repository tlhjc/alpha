import { connect } from 'react-redux';
import Method from '../components/method';

import * as MethodActions from '../actions/method.js';
import { routerActions } from 'react-router-redux';
const Actions = {...MethodActions, ...routerActions};

function mapStateToProps (state) {
  const { method: { methodInView } } = state;
  return { method: methodInView };
}

export default connect(mapStateToProps, Actions)(Method);
