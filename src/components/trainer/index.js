import React, { Component } from 'react';

import Navbar from '../../../lib/navbar';

import './style.css';

export default class Athlete extends Component {
  constructor () {
    super();
    this.getTrainer = this.getTrainer.bind(this);
  }
  componentWillMount () {
    const trainer = this.props.location.pathname.split('/')[2];
    console.log(trainer);
    this.getTrainer(trainer);
  }
  getTrainer (trainer) {
    this.props.getTrainerData(trainer);
  }
  render() {
    const trainer = this.props.location.pathname.split('/')[2];
    console.log(trainer);
    return (
      <div>
        <Navbar title="placeholder" />
      </div>
    );
  }
}
