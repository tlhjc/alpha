import React, { Component } from 'react';

import Navbar from '../../../lib/navbar';

import './style.css';

export default class Trainer extends Component {
  constructor () {
    super();
    this.getTrainer = this.getTrainer.bind(this);
  }
  componentWillMount () {
    const trainer = this.props.location.pathname.split('/')[2];
    this.getTrainer(trainer);
  }
  getTrainer (trainer) {
    this.props.getTrainerData(trainer);
  }
  render() {
    const trainerData = this.props.trainer;
    const videos = this.props.trainer[0] ? this.props.trainer[0].videos : [];
    console.log('---------', videos, trainerData);
    return (
      <div>
        <Navbar title={trainerData.name} />
      </div>
    );
  }
}
