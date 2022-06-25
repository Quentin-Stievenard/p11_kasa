import React from 'react';

// scss
import './NotFound.scss';

// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <main className="mb-28">
        <Header />
        <div className="flex flex-col justify-center items-center mt-24">
          <p className="not-found-title">404</p>
          <p className="not-found-text">
            Oups! La page que vous demandez n&apos;existe pas.
          </p>
          <a href="/" className="link-notFound">
            Retourner sur la page d’accueil
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
