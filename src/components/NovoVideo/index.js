import React, { useState } from 'react';
import { useVideos } from '../context/VideoContext';
import './NovoVideo.css';

function NovoVideo() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const { addVideo } = useVideos();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!image) newErrors.image = 'O link é obrigatório';
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      addVideo(category, { title, category, thumbnail: image, alt: description, video });
      handleClear();
    }
  };

  const handleClear = () => {
    setTitle('');
    setCategory('');
    setImage('');
    setVideo('');
    setDescription('');
    setErrors({});
  };

  return (
    <div className="new-video-form">
      <h2>NOVO VÍDEO</h2>
      <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="ingrese el título"
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoria</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">selecione uma categoría</option>
            <option value="frontend">Front End</option>
            <option value="backend">Back End</option>
            <option value="mobile">Mobile</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Imagem</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="o link é obrigatório"
            className={errors.image ? 'error' : ''}
          />
          {errors.image && <span className="error-message">{errors.image}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="video">Vídeo</label>
          <input
            type="text"
            id="video"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
            placeholder="digite o link do video"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="sobre o que é esse vídeo?"
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="submit">GUARDAR</button>
          <button type="button" onClick={handleClear}>LIMPAR</button>
        </div>
      </form>
    </div>
  );
}

export default NovoVideo;
