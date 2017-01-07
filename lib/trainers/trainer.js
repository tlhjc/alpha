import React, { Component } from 'react';

export default class Trainer extends Component {
  constructor () {
    super();
  }
  render() {
    const { name } = this.props;
    return (
      <div>{name}</div>
    );
  }
}
