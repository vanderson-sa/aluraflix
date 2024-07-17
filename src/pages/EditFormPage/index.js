import React, { useState } from 'react';
import './EditFormPage.css';

const EditFormPage = ({ video, onUpdate }) => {
  const [formData, setFormData] = useState(video);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  const handleClear = () => {
    setFormData({
      title: '',
      category: '',
      image: '',
      video: '',
      description: ''
    });
  };

  return (
    <div className="form-pagina">
      <form onSubmit={handleSubmit}>
        <h2>EDITAR CARD:</h2>
        <label>
          Título
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          Categoria
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="Front End">Front End</option>
            <option value="Back End">Back End</option>
            <option value="Mobile">Mobile</option>
          </select>
        </label>
        <label>
          Imagem
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </label>
        <label>
          Video
          <input type="text" name="video" value={formData.video} onChange={handleChange} />
        </label>
        <label>
          Descrição
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </label>
        <div className='buttons'>
          <button type="submit">GUARDAR</button>
          <button type="button" onClick={handleClear}>LIMPAR</button>
        </div>
      </form>
    </div>
  );
};

export default EditFormPage;