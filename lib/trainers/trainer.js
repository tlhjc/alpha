import React, { Component } from 'react';

export default class Trainer extends Component {
  constructor () {
    super();
  }
  render() {
    const { name, twitter, followers, image } = this.props;
    return (
      <div className="trainerContainer">
        <img className="trainerImage" src={image} />
        <div className="textContainer">
          <div>{name}</div>
          <div>{twitter}</div>
          <div>{followers}</div>
        </div>
      </div>
    );
  }
}
