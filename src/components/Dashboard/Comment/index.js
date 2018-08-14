import React from 'react';
import propTypes from 'prop-types';

import './styles.css';

const Comment = ({ text, index }) => {
  const avatarColor = index % 2 === 0 ? 'orange' : 'blue';

  return (
    <div className="comment">
      <div className={`comment__avatar comment__avatar_${avatarColor}`}></div>

      <p className="comment__text">{text}</p>
    </div>
  );
};

Comment.propTypes = {
  index: propTypes.number.isRequired,
  text: propTypes.string.isRequired,
};

export default Comment;
