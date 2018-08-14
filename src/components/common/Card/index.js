import React from 'react';
import propTypes from 'prop-types';

import './styles.css';

const Card = ({ children, className }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  className: propTypes.string,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

Card.defaultProps = {
  className: '',
};

export default Card;
