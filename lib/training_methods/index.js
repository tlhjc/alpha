import React, { Component } from 'react';

import trainingMethods from '../../src/constants/training_methods.js';
import TrainingMethod from './training_method.js';

export default class TrainingMethods extends Component {
  render() {
    const trainingMethodGroup = trainingMethods.map(trainingMethod => {
      return <TrainingMethod method={trainingMethod} key={trainingMethod} />;
    });
    return (
      <div className="trainingMethodContainer">
        {trainingMethodGroup}
      </div>
    );
  }
}
