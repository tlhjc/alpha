import { connect } from 'react-redux';
import Trainer from '../components/trainer';

import * as TrainerActions from '../actions/trainer.js';
import { routerActions } from 'react-router-redux';
const Actions = {...TrainerActions, ...routerActions};

function mapStateToProps (state) {
  const { trainer: { trainerInView } } = state;
  return { trainer: trainerInView };
}

export default connect(mapStateToProps, Actions)(Trainer);
