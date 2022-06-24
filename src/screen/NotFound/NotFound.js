import React from 'react';

// scss
import './NotFound.scss';

// components
import Header from '../../components/Header/Header';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <main>
        <Header />
        <div className="flex flex-col justify-center items-center">
          <p className="not-found-title">404</p>
          <p className="not-found-text">
            Oups! La page que vous demandez n&apos;existe pas.
          </p>
          <a href="/" className="underline">
            Retourner sur la page d’accueil
          </a>
        </div>
      </main>
    </div>
  );
}
