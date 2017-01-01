import React, { Component, PropTypes } from 'react';

import './style.css';

export default class TrainingMethod extends Component {
  render() {
    const { method } = this.props;
    return (
      <div className="trainingMethod">
      {method}
      </div>
    );
  }
}

TrainingMethod.propTypes = {
  method: PropTypes.string
}
