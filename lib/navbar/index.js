import React, { Component } from 'react';
import { Link } from 'react-router';

import './style.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <div className="ftr">FTR.</div>
        </Link>
        <div className="title">{this.props.title.toUpperCase()}</div>
      </div>
    )
  }
}
