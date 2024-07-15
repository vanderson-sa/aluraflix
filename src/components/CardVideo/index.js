import React, { useState } from 'react';
import './CardVideo.css';
import EditCardModal from '../Modal';
import VideoModal from '../VideoModal';
import { useVideos } from '../context/VideoContext';

function CardVideo({ category, video }) {
  const { deleteVideo, editVideo } = useVideos();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleDeleteClick = () => {
    deleteVideo(category, video);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleSave = (newVideo) => {
    editVideo(category, video, newVideo);
  };

  const handleImageClick = () => {
    setIsVideoModalOpen(true);
  };

  return (
    <div className={`card-video ${category}`}>
      <img src={video.thumbnail} alt={video.alt} onClick={handleImageClick} />
      <h3>{video.title}</h3>
      <div className="actions">
        <button onClick={handleDeleteClick}>DELETAR</button>
        <button onClick={handleEditClick}>EDITAR</button>
      </div>
      <EditCardModal 
        isOpen={isEditModalOpen} 
        onClose={() => setIsEditModalOpen(false)} 
        card={video} 
        onSave={handleSave} 
      />
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
        videoUrl={video.video} 
      />
    </div>
  );
}

export default CardVideo;
