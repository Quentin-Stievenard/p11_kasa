import React from 'react';

// scss
import './Home.scss';

// components
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

// images
import bg from '../../images/homeBG.svg';
import bgResp from '../../images/homeResp.svg';

// data
import appartements from '../../data.json';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <section>
      <main className="mb-16">
        <Header />
        <section className="home-cover">
          <div className="header-home-cover">
            <img className="bg-desktop" src={bg} alt="image de background" />
            <img
              className="bg-responsive"
              src={bgResp}
              alt="image de background responsive"
            />
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
      <Footer />
    </section>
  );
}
