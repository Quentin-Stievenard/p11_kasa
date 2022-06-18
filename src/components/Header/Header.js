import React from 'react';

// scss
import './Header.scss';

// images
import logo from '../../images/LOGO.svg';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo kasa" />
      <div>
        <a href="/">Accueil</a>
        <a href="/about">A Propos</a>
      </div>
    </header>
  );
}
