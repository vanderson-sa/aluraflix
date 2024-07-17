import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CategorySection from './components/CategorySection';
import FormPage from './pages/FormPage';
import EditFormPage from './pages/EditFormPage';
import Footer from './components/Footer';

const App = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'Exemplo Front End',
      category: 'Front End',
      image: 'https://idocode.com.br/wp-content/uploads/2019/09/tecnologia.jpg.webp',
      video: 'https://youtu.be/IQ8-_khQATQ',
      description: 'Vídeo de exemplo para Front End',
    },
    {
      id: 2,
      title: 'Exemplo Back End',
      category: 'Back End',
      image: 'https://img.freepik.com/vetores-gratis/particula-de-tecnologia-abstrata-realista-de-fundo_23-2148431735.jpg',
      video: 'https://youtu.be/UzWatUjuaNI',
      description: 'Vídeo de exemplo para Back End',
    },
    {
      id: 3,
      title: 'Exemplo Mobile',
      category: 'Mobile',
      image: 'https://img.odcdn.com.br/wp-content/uploads/2023/12/Tecnologia-2024.jpg',
      video: 'https://youtu.be/wxLvvMxzc1Q',
      description: 'Vídeo de exemplo para Mobile',
    },
  ]);

  const [page, setPage] = useState('home');
  const [editingVideo, setEditingVideo] = useState(null);

  const handleSave = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
    setPage('home');
  };

  const handleDelete = (id) => {
    setVideos(videos.filter((video) => video.id !== id));
  };

  const handleEdit = (id) => {
    const videoToEdit = videos.find((video) => video.id === id);
    setEditingVideo(videoToEdit);
    setPage('edit');
  };

  const handleUpdate = (updatedVideo) => {
    setVideos(videos.map((video) => (video.id === updatedVideo.id ? updatedVideo : video)));
    setEditingVideo(null);
    setPage('home');
  };

  return (
    <div className="app-container">
      <Navbar onHomeClick={() => setPage('home')} onNewVideoClick={() => setPage('form')} />
      <div className="main-content">
        {page === 'home' && (
          <>
            <div className="banner-container">
              <Banner />
            </div>
            <div className="category-section-container">
              <CategorySection
                category="FRONT END"
                videos={videos.filter((video) => video.category === 'Front End')}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
              <CategorySection
                category="BACK END"
                videos={videos.filter((video) => video.category === 'Back End')}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
              <CategorySection
                category="MOBILE"
                videos={videos.filter((video) => video.category === 'Mobile')}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            </div>
          </>
        )}
        {page === 'form' && <FormPage onSave={handleSave} />}
        {page === 'edit' && editingVideo && (
          <EditFormPage video={editingVideo} onUpdate={handleUpdate} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
