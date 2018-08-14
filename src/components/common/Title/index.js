import React from 'react';
import propTypes from 'prop-types';

import './styles.css';

const Title = ({ text }) => (
  <h2 className="title">{text}</h2>
);

Title.propTypes = {
  text: propTypes.string.isRequired,
};

export default Title;
