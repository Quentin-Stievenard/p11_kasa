import React from 'react';

// scss
import './Home.scss';

// components
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

// images
import bg from '../../images/homeBG.svg';

// data
import appartements from '../../data.json';

export default function Home() {
  return (
    <main>
      <Header />
      <section className="home-cover">
        <div className="header-home-cover">
          <img src={bg} alt="image de background" />
          <p className="title-home">Chez vous, partout et ailleurs</p>
        </div>
        <div className="home-card">
          {appartements.map((appartement, i) => {
            return (
              <Card
                onClick={() => {
                  window.location = `/appartement/${appartement.id}`;
                }}
                className="card"
                key={i}
                imgAppartement={appartement.cover}
                title={appartement.title}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
