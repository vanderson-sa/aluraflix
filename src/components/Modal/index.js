import React, { useState } from 'react';
import './Modal.css';

const EditCardModal = ({ isOpen, onClose, card, onSave }) => {
  const [formData, setFormData] = useState({
    title: card.title,
    category: card.category,
    image: card.image,
    video: card.video,
    description: card.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleClear = () => {
    setFormData({
      title: '',
      category: '',
      image: '',
      video: '',
      description: '',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>EDITAR CARD:</h2>
        <form>
          <label>
            Título
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
          </label>
          <label>
            Categoria
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
              <option value="mobile">Mobile</option>
              {/* Adicione outras categorias conforme necessário */}
            </select>
          </label>
          <label>
            Imagem
            <input type="text" name="image" value={formData.image} onChange={handleChange} />
          </label>
          <label>
            Vídeo
            <input type="text" name="video" value={formData.video} onChange={handleChange} />
          </label>
          <label>
            Descrição
            <textarea name="description" value={formData.description} onChange={handleChange} />
          </label>
          <div className="button-group">
            <button type="button" className="save-button" onClick={handleSave}>GUARDAR</button>
            <button type="button" className="clear-button" onClick={handleClear}>LIMPAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCardModal;
