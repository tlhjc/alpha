import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import './style.css';

export default class TrainingMethod extends Component {
  render() {
    const { method } = this.props;
    const urlMethod = method.toLowerCase();
    return (
      <Link to={`/method/${urlMethod}`}>
        <div className="trainingMethod">
          {method}
        </div>
      </Link>
    );
  }
}

TrainingMethod.propTypes = {
  method: PropTypes.string
}
