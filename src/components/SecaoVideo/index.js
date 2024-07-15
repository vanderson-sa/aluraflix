import React from 'react';
import CardVideo from '../CardVideo';
import { useVideos } from '../context/VideoContext';
import './SecaoVideo.css';

function SecaoVideo({ title, category }) {
  const { videos } = useVideos();
  const categoryVideos = videos[category];

  return (
    <section className="video-section">
      <h2>{title}</h2>
      <div className="video-grid">
        {categoryVideos.map((video, index) => (
          <CardVideo key={index} category={category} video={video} />
        ))}
      </div>
    </section>
  );
}

export default SecaoVideo;
