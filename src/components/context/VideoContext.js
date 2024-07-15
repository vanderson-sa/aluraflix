import React, { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState({
    frontend: [
      { category: 'frontend', title: 'O que você precisa saber para começar em DevOps com Leonardo Sartorello', thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/023/609/409/small/sunburst-background-with-rays-sunray-background-youtube-thumbnail-background-zoom-out-background-free-vector.jpg', alt: 'Thumbnail 1' },
      
    ],
    backend: [
      { category: 'frontend', title: 'O que você precisa saber para começar em DevOps com Leonardo Sartorello', thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/023/609/409/small/sunburst-background-with-rays-sunray-background-youtube-thumbnail-background-zoom-out-background-free-vector.jpg', alt: 'Thumbnail 2' },
      
    ],
    mobile: [
      { category: 'frontend', title: 'O que você precisa saber para começar em DevOps com Leonardo Sartorello', thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/023/609/409/small/sunburst-background-with-rays-sunray-background-youtube-thumbnail-background-zoom-out-background-free-vector.jpg', alt: 'Thumbnail 3' },
      
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
