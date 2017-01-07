import React, { Component } from 'react';

import Navbar from '../../../lib/navbar';
import TrainingMethods from '../../../lib/training_methods';

import './style.css';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Navbar title="holistic fitness" />
        <TrainingMethods />
      </div>
    );
  }
}
