import React from 'react';
import PropTypes from 'prop-types';

// scss
import './Card.scss';
/**
 * @param  {image} {imgAppartement}
 * @param  {string} {title}
 * @param  {()=>{void}} {onClick}
 */
export default function Card({ imgAppartement, title, onClick }) {
  return (
    <div className="card-container" onClick={onClick}>
      <img className="card-img" src={imgAppartement} />
      <p className="card-title">{title}</p>
    </div>
  );
}

Card.propTypes = {
  imgAppartement: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};
