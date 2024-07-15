// components/VideoCard.js
import React from 'react';
import './VideoCard.css';

function VideoCard({ title, videoSrc, description }) {
  return (
    <div className="video-card">
      <video controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default VideoCard;
