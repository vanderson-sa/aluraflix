import React, { useState } from 'react';
import './FormPage.css';

const FormPage = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [video, setVideo] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert('O link da imagem é obrigatório');
      return;
    }
    onSave({ title, category, image, video, description });
  };

  return (
    <div className="form-page">
      <h1 className="form-title">NOVO VÍDEO</h1>
      <p className="form-subtitle">COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</p>
      <div className="form-section">
        <hr className="form-section-line" />
        <h2 className="form-section-title">Criar Card</h2>
        <hr className="form-section-line" />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Título</label>
            <input
              className="form-input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Qual o título..."
            />
          </div>
          <div className="form-group">
            <label className="form-label">Categoria</label>
            <select
              className="form-input"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Selecione uma categoria</option>
              <option value="Front End">Front End</option>
              <option value="Back End">Back End</option>
              <option value="Mobile">Mobile</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Imagem</label>
            <input
              className="form-input"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Link é obrigatório..."
            />
          </div>
          <div className="form-group">
            <label className="form-label textarea">Vídeo</label>
            <input
              className="form-input"
              type="text"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
              placeholder="Link do vídeo..."
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Descrição</label>
            <textarea
              className="form-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva sobre o que é esse vídeo?"
            ></textarea>
          </div>
        </div>
        <div className="form-buttons">
          <button className="form-button save-button" type="submit">GUARDAR</button>
          <button className="form-button clear-button" type="reset">LIMPAR</button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
