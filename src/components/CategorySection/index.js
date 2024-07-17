import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal';
import EditFormPage from '../../pages/EditFormPage';
import './CategorySection.css';

const CategorySection = ({ category, videos, onDelete, onEdit }) => {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const getCategoryClass = (category) => {
    switch (category) {
      case 'Front End':
        return 'frontend';
      case 'Back End':
        return 'backend';
      case 'Mobile':
        return 'mobile';
      default:
        return '';
    }
  };

  const handleCardClick = (video) => {
    setCurrentVideo(video);
    setVideoModalOpen(true);
  };

  const handleEditClick = (video) => {
    setCurrentVideo(video);
    setEditModalOpen(true);
  };

  const handleEditSave = (updatedVideo) => {
    onEdit(updatedVideo);
    setEditModalOpen(false);
  };

  const categoryClass = getCategoryClass(category);

  return (
    <div className="category-section">
      <h2 className={`category-title ${categoryClass}`}>{category}</h2>
      <div className="video-cards">
        {videos.map(video => (
          <div
            className={`video-card ${getCategoryClass(video.category)}-card`}
            key={video.id}
            onClick={() => handleCardClick(video)}
          >
            <img src={video.image} alt={video.title} className="video-thumbnail" />
            <div className="video-actions">
              <button
                className={`video-button ${getCategoryClass(video.category)}-button`}
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(video.id);
                }}
              >
                <FontAwesomeIcon icon={faTrash} /> DELETAR
              </button>
              <button
                className={`video-button ${getCategoryClass(video.category)}-button`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditClick(video);
                }}
              >
                <FontAwesomeIcon icon={faEdit} /> EDITAR
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isVideoModalOpen} onClose={() => setVideoModalOpen(false)}>
        {currentVideo && (
          <iframe
            className="video-iframe"
            src={`https://www.youtube.com/embed/${new URL(currentVideo.video).searchParams.get('v')}`}
            title={currentVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </Modal>

      <Modal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)}>
        {currentVideo && (
          <EditFormPage video={currentVideo} onUpdate={handleEditSave} />
        )}
      </Modal>
    </div>
  );
};

export default CategorySection;
