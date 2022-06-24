import React from 'react';
import PropTypes from 'prop-types';

// scss
import './Avatar.scss';

export default function Avatar({ imgProfil }) {
  return (
    <div className="avatar">
      <img src={imgProfil} alt="Avatar host" />
    </div>
  );
}

Avatar.propTypes = {
  imgProfil: PropTypes.string,
};
