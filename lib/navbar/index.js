import React, { Component } from 'react';

import './style.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="ftr">FTR.</div>
        <div className="title">{this.props.title.toUpperCase()}</div>
      </div>
    )
  }
}
