import React, { Component } from 'react';

import './style.css';

export default class VideoListItem extends Component {
  constructor () {
    super();
  }
  render() {
    const { url, tags } = this.props;
    return (
      <div className="videoItemContainer">
        <div onClick={this.togglePlay}>
          <video
          controls
          id={url}
          width={'100%'}
          src={url}
          className='videoPlayer'></video>
        </div>
      </div>
    )
  }
}
