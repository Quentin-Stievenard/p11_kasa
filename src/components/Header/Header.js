import React from 'react';

// scss
import './Header.scss';

// images
import logo from '../../images/LOGO.svg';

export default function Header() {
  const url = window.location.pathname.split('/')[1];

  return (
    <header>
      <img className="logo-header" src={logo} alt="logo kasa" />
      <div>
        <a href="/" className={`${url === '' ? 'underline' : ''}`}>
          Accueil
        </a>
        <a href="/about" className={`${url === 'about' ? 'underline' : ''}`}>
          A Propos
        </a>
      </div>
    </header>
  );
}
