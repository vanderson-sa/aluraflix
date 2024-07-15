import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">ALURAFLIX</h1>
      <nav>
        <Link to="/" className="nav-button">HOME</Link>
        <Link to="/novo-video" className="nav-button">NOVO VÍDEO</Link>
      </nav>
    </header>
  );
}

export default Header;
