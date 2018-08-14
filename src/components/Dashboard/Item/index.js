import React from 'react';
import { Link } from 'react-router-dom';
import { matchPath } from 'react-router';
import propTypes from 'prop-types';

import './styles.css';

const Item = ({ item, currentPath, onDelete }) => {
  const path = `/dashboard/${item.id}`;

  const isActive = !!matchPath(currentPath, { path });
  const activeItemClassName = isActive ? 'item_active' : '';

  return (
    <div className={`item ${activeItemClassName}`}>
      <div>
        <Link to={path} className="item__link" >{item.title}</Link>

        <span className="item__label">{item.comments.length}</span>
      </div>

      <button className="item__button" onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
};

Item.propTypes = {
  onDelete: propTypes.func.isRequired,
  currentPath: propTypes.string.isRequired,
  item: propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    comments: propTypes.array.isRequired,
  }).isRequired,
};

export default Item;
