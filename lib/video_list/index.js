import React, { Component } from 'react';

import VideoListItem from './video_list_item.js';

import './style.css';

export default class VideoList extends Component {
  constructor () {
    super();
  }
  render() {
    const { videos } = this.props;
    const videoList = videos.map((video, i) => {
      return <VideoListItem
      key={i}
      url={video.url}
      tags={video.tags} />;
    });
    return (
      <div className="videoListContainer">
        {videoList}
      </div>
    )
  }
}
