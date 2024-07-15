// VideoModal.js
import React from 'react';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="video-modal">
      <div className="video-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <iframe
          width="100%"
          height="315"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
