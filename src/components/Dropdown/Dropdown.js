import React, { useState } from 'react';
import PropTypes from 'prop-types';

// scss
import './Dropdown.scss';

// components
import { Icon } from '@iconify/react';

// icones
import arrowIosDownwardOutline from '@iconify/icons-eva/arrow-ios-downward-outline';

export default function Dropdown({ title, description, className }) {
  // ? Permet de deployer le dropdown au click sur le header
  const [deploy, setDeploy] = useState(false);
  return (
    <div
      className={`dropdown-container  ${className}`}
      onClick={() => {
        setDeploy(!deploy);
      }}
    >
      <div className="header-dropdown flex items-center justify-between">
        <h3>{title}</h3>
        <Icon className="text-white" icon={arrowIosDownwardOutline} />
      </div>
      {deploy && (
        <div className="description-container ">
          <p className="flex flex-wrap">{description}</p>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.shape({})),
  onClick: PropTypes.func,
  className: PropTypes.string,
};
