import React, { Component } from 'react';

import Navbar from '../../../lib/navbar';
import Trainers from '../../../lib/trainers';

import './style.css';

export default class Method extends Component {
  constructor () {
    super();
    this.getTrainingMethod = this.getTrainingMethod.bind(this);
  }
componentWillMount () {
  const method = this.props.location.pathname.split('/')[2];
  this.getTrainingMethod(method);
}
  getTrainingMethod (method) {
    this.props.getTrainingMethodData(method);
  }
  render() {
    const methodType = this.props.location.pathname.split('/')[2];
    const trainers = this.props.method[0] ? this.props.method[0].trainers : [];
    return (
      <div className="methodContainer">
        <Navbar title={methodType} />
        <div className="trainerListWrapper">
          <div className="methodSubtitle">PICK AN ATHLETE</div>
          <Trainers trainers={trainers} />
        </div>
      </div>
    );
  }
}
