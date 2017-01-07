import React, { Component } from 'react';

import Navbar from '../../../lib/navbar';

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
    console.log('-------', this.props.method);
    const method = this.props.location.pathname.split('/')[2];
    return (
      <div className="container">
        <Navbar title={method} />
      </div>
    );
  }
}
