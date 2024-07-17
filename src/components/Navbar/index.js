import React from 'react';
import './Navbar.css';

const Navbar = ({ onHomeClick, onNewVideoClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">ALURAFLIX</div>
      <div className="navbar-buttons">
        <button className="navbar-button" onClick={onHomeClick}>HOME</button>
        <button className="navbar-button" onClick={onNewVideoClick}>NOVO VÍDEO</button>
      </div>
    </nav>
  );
};

export default Navbar;