import React from 'react';
import PropTypes from 'prop-types';

// scss
import './Tag.scss';

export default function Tag({ text, className }) {
  return (
    <div className={`tag-container ${className}`}>
      <p>{text}</p>
    </div>
  );
}

Tag.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
