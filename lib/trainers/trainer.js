import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Trainer extends Component {
  constructor () {
    super();
  }
  render() {
    const { name, instagram, followers, image } = this.props;
    const uppercaseName = name.toUpperCase();
    return (
      <Link to={`/athlete/${instagram}`}>
        <div className="trainerContainer">
          <img className="trainerImage" src={image} />
          <div className="textContainer">
            <div className="trainerName">{uppercaseName}</div>
            <img className="instagramIcon" src="../../assets/icons/instagram.svg" />
            <div className="trainerFollowers">{followers} FOLLOWERS</div>
            <div className="trainerInstagram">@{instagram}</div>
          </div>
        </div>
      </Link>
    );
  }
}
