import React, { Component } from 'react';

import Navbar from '../../../lib/navbar';

import './style.css';

export default class Method extends Component {
  render() {
    const method = this.props.location.pathname.split('/')[2];
    return (
      <div className="container">
        <Navbar title={method} />
      </div>
    );
  }
}
