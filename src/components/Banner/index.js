import React from 'react';
import './Banner.css';

const Banner = ({ category }) => {
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

  const categoryClass = getCategoryClass(category);

  return (
    <div className={`banner ${categoryClass}-banner`} style={{ backgroundImage: 'url(https://blog.ead.unipar.br/wp-content/uploads/2021/04/inovacao-e-tecnologia.jpg)' }}>
      <div className="banner-content">
        <div className="banner-text">
          <span className={`banner-category ${categoryClass}-title`}>{category}</span>
          <h1 className="banner-title">Tutorial: Como CRIAR um CHATBOT com a API do Google GEMINI?</h1>
          <p className="banner-description">
          Boas-vindas a mais um episódio da Websérie IAs Generativas! 
          Se você quer aprender a criar um chatbot com a API do Google Gemini, esse tutorial foi feito especialmente para você!
          Aqui, você vai conhecer a aplicação prática da inteligência artificial ao criar um chatbot usando a API do Google Gemini. Mesmo que você não saiba programar ou esteja apenas começando, esse vídeo vai te orientar em cada etapa do processo de forma assertiva e simples. 
          </p>
          </div>
        <div className="banner-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Kkg1cjVoYq4"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="SEO com React"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Banner;
