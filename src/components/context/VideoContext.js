import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState({
    frontend: [
      { category: 'frontend', title: 'O que faz uma desenvolvedora front-end?', thumbnail: 'url-to-thumbnail', alt: 'Thumbnail 1' },
      // Add more videos here...
    ],
    backend: [
      { category: 'backend', title: 'O que estudar para ser backend developer?', thumbnail: 'url-to-thumbnail', alt: 'Thumbnail 2' },
      // Add more videos here...
    ],
    mobile: [
      { category: 'mobile', title: 'Desenvolvimento Android', thumbnail: 'url-to-thumbnail', alt: 'Thumbnail 3' },
      // Add more videos here...
    ]
  });

  const addVideo = (category, newVideo) => {
    setVideos(prevVideos => ({
      ...prevVideos,
      [category]: [...prevVideos[category], newVideo],
    }));
  };

  const editVideo = (category, oldVideo, newVideo) => {
    setVideos(prevVideos => ({
      ...prevVideos,
      [category]: prevVideos[category].map(video =>
        video === oldVideo ? newVideo : video
      ),
    }));
  };

  const deleteVideo = (category, videoToDelete) => {
    setVideos(prevVideos => ({
      ...prevVideos,
      [category]: prevVideos[category].filter(video => video !== videoToDelete),
    }));
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo, editVideo, deleteVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideos = () => useContext(VideoContext);

export { VideoProvider, useVideos };
