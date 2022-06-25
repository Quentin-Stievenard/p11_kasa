import React from 'react';
import PropTypes from 'prop-types';

// scss
import './Appartement.scss';

// components
import Header from '../../components/Header/Header';
import Avatar from '../../components/Avatar/Avatar';
import Tag from '../../components/Tag/Tag';
import { Icon } from '@iconify/react';
import Footer from '../../components/Footer/Footer';

// icones
import starFill from '@iconify/icons-eva/star-fill';
import Dropdown from '../../components/Dropdown/Dropdown';

export default function Appartement({ dataProps }) {
  const targetData = window.location.pathname.split('/')[2];
  const data = dataProps.filter(
    (dataAppartement) => dataAppartement.id === targetData
  )[0];

  const StarsComponent = ({ numberOfHighlitedStars }) => {
    const JSXArray = [];

    for (let i = 0; i < 5; i++) {
      JSXArray.push(
        <Icon
          icon={starFill}
          className={i < numberOfHighlitedStars ? 'red-star' : 'grey-star'}
        />
      );
    }

    return JSXArray.map((element) => element);
  };

  return (
    <div>
      <main>
        <Header />
        <section className="appartement-container">
          <img className="img-appartement" src={data.cover} />
          <section className="appartment-desktop">
            <div className="flex items-center justify-between pt-8">
              <div>
                <p className="appartement-title">{data.title}</p>
                <p className="appartement-location">{data.location}</p>
              </div>
              <div className="flex items-center justify-center flex-wrap">
                <p className="w-24">{data.host.name}</p>
                <Avatar imgProfil={data.host.picture} />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {data.tags.map((tag, i) => {
                  return <Tag className="mt-5" key={i} text={tag} />;
                })}
              </div>
              <div className="flex items-center">
                <StarsComponent numberOfHighlitedStars={data.rating} />
              </div>
            </div>
          </section>
          <section className="appartement-resp">
            <div className="flex flex-col">
              <p className="appartement-title">{data.title}</p>
              <p className="appartement-location">{data.location}</p>
            </div>
            <div className="flex items-center">
              {data.tags.map((tag, i) => {
                return <Tag className="mt-5" key={i} text={tag} />;
              })}
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <StarsComponent numberOfHighlitedStars={data.rating} />
              </div>
              <div className="flex items-center justify-center flex-wrap">
                <p className="w-24 host-name">{data.host.name}</p>
                <Avatar imgProfil={data.host.picture} />
              </div>
            </div>
          </section>
          <div className="flex items-top justify-between mt-6 pb-48 dropdown-container">
            <Dropdown
              className="equipement"
              title="Equipement"
              description={data.equipments.map((equipment, i) => {
                return <p key={i}>{equipment}</p>;
              })}
            />
            <Dropdown
              className="description"
              title="Description"
              description={data.description}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

Appartement.propTypes = {
  dataProps: PropTypes.arrayOf(PropTypes.object).isRequired,
};
