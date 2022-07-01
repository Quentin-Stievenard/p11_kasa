import React, { useState } from 'react';
import PropTypes from 'prop-types';

// scss
import './Carousel.scss';
import { Icon } from '@iconify/react';

// icones
import arrowIosBackOutline from '@iconify/icons-eva/arrow-ios-back-outline';
import arrowIosForwardOutline from '@iconify/icons-eva/arrow-ios-forward-outline';

export default function Carousel({ images }) {
  const [currentPicture, setCurrentPicture] = useState(0);

  const previousPicture = () => {
    return setCurrentPicture(() =>
      currentPicture === 0 ? images.length - 1 : currentPicture - 1
    );
  };

  const nextPicture = () => {
    return setCurrentPicture(() =>
      currentPicture === images.length - 1 ? 0 : currentPicture + 1
    );
  };

  return (
    <section className="w-full carousel">
      <Icon
        icon={arrowIosBackOutline}
        onClick={previousPicture}
        className="previous"
      />
      <img
        src={images[currentPicture]}
        alt="photo bannière"
        className="carousel-img"
      />
      <Icon
        icon={arrowIosForwardOutline}
        onClick={nextPicture}
        className="next"
      />
    </section>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(),
};
