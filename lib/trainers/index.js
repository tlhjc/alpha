import React, { Component } from 'react';

import Trainer from './trainer.js';

export default class Trainers extends Component {
  constructor () {
    super();
  }
  render() {
    const { trainers } = this.props;
    const trainerList = trainers.map(trainer => {
      return <Trainer key={trainer.name} name={trainer.name} />;
    });
    return (
      <div>
        {trainerList}
      </div>
    )
  }
}
