import React from 'react';

// scss
import './Header.scss';

// images
import logo from '../../images/LOGO.svg';

export default function Header() {
  const url = window.location.pathname.split('/')[1];

  return (
    <header>
      <a href="/">
        <img className="logo-header" src={logo} alt="logo kasa" />
      </a>
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
