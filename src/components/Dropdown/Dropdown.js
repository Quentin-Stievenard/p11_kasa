import React, { useState } from 'react';
import PropTypes from 'prop-types';

// scss
import './Dropdown.scss';

// components
import { Icon } from '@iconify/react';

// icones
import arrowIosDownwardOutline from '@iconify/icons-eva/arrow-ios-downward-outline';

/**
 * @param  {string} {title}
 * @param  {string} {description}
 * @param  {string} {className}
 */
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
        <div className="description-container">
          <div className="flex flex-wrap description">{description}</div>
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
