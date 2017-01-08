import React, { Component } from 'react';

import Trainer from './trainer.js';
import './style.css';

export default class Trainers extends Component {
  constructor () {
    super();
  }
  render() {
    const { trainers } = this.props;
    const trainerList = trainers.map(trainer => {
      return <Trainer
      key={trainer.name}
      name={trainer.name}
      followers={trainer.followers}
      instagram={trainer.instagram}
      image={trainer.imageUrl} />;
    });
    return (
      <div className="trainersContainer">
        {trainerList}
      </div>
    )
  }
}
